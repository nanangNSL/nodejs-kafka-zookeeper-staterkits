const { Users } = require("../models");
const bcrypt = require('bcrypt');
const {generateAccessToken, verifyAccessToken}= require('../middlewares/jwtToken')

exports.RegisterSU = async (req, res, next) => {
  const data = req?.body;
  let name, nameCalling, email, phonenumber, password, role;
  const salt = await bcrypt.genSalt(10);
  try {
    name = data?.name;
    nameCalling = data?.nameCalling;
    email = data?.email;
    phonenumber = data?.phonenumber;
    password =  await bcrypt.hash( data?.password, salt);
    role = data?.role;
    let wraper = {
        full_name : name,
        sebutan_gelar : nameCalling,
        email,
        phonenumber,
        password,
        role
    }
    // validate
    const cekEmail = await Users.findOne({ where : {email : email }});
    const cekNumber = await Users.findOne({ where : {phonenumber : phonenumber }});
    if(cekEmail){
        res.status(200).json({message : "E-mail has been registered"});
        return false;
    }else if(cekNumber){
        res.status(200).json({message : "Phone Number has been registered"});
        return false;
    }else{
        const blastToDB = await Users.create(wraper);
        if(blastToDB){
           res.status(200).json({message : "Register successfully"})
          }
    }
  } catch (error) {
    next(error);
  }
};

exports.Login = async (req, res, next) => {
    const data = req?.body;
    let email, password, role;
    try {
        email = data?.email;
        password = data?.password;
        role = data?.role;
        const cekEmail = await Users.findOne({ where : {email : email }});
        const isMatch = await bcrypt.compare(password, cekEmail?.password);
        const isRole = cekEmail.role == role;
        if(!cekEmail) {
            res.status(404).json({message : "E-mail not registered"});
            return false
        }else if(!isMatch){
            res.status(401).json({message : "Password mismatch"});
            return false
        }else if(!isRole){
            res.status(401).json({message : "Not your jobs"});
            return false
        }else{
        // UHS = User Hide Security
            let payload = { UHS : cekEmail?.userID};
            const access_token = await generateAccessToken(payload);
            const saveToken = await Users.update({refresh_token : access_token}, {where: {userID : cekEmail?.userID}});
            if(saveToken){
                res.status(200).json({message : "Login successful", token : access_token});
            }
        }
    } catch (error) {
        next(error);
    }
}

exports.refreshToken = async (req, res, next) => {
    const data = req?.body;
    let token, verifyToken ;
    try {
        token =  data?.token;
        if (!token){
            res.status(404).json({ message : 'Input Tokens are required'});
            return false
          }
        verifyToken = await verifyAccessToken(token);
        if(verifyToken){
            const payload = {UHS : verifyToken?.UHS};
            const access_token = await generateAccessToken(payload);
            const updateToken = await Users.update({refresh_token : access_token }, {where: {userID : verifyToken?.UHS}})
            if(updateToken) {
                res.status(200).json({message: "Token Updated" , token: access_token});
            }
        }else{
            res.status(401).json({ message : 'Forbiden access_token' });
            return false
        }
    } catch (error) {
      next(error);
    }
  };
