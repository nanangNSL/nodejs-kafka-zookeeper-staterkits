const {Driver} = require('../models')


exports.Create = async (req, res) =>{
    try {
        const data  = req?.body;
        if(data){
            var randomstring = Math.random().toString(36).slice(-8);
          let payload = {
            userID : data?.userID,
            no_license : data?.no_license,
            type_license : data?.type_license,
            name_mother : data?.name_mother,
            phone_family : data?.phone_family,
            code_verify : randomstring,
            zone_service: data?.zone_service,
            is_deleted : true
        }
        if(payload){
            const save = await Driver.create(payload);
            if(save){
                res.status(200).json({message : "Created successfully"})
            }else{
                res.status(404).json({message : "Error creating"})
                return false;
            }
        }  
        }else{
            res.status(404).json({message : "Error creating"})
            return false;
        }
        
    } catch (error) {
        console.log(error)
    }
}

exports.Updated = async (req, res) =>{
    try {
        const data  = req?.body;
        const id = data?.id;
        if(data){
          let payload = {
            userID : data?.userID,
            no_license : data?.no_license,
            type_license : data?.type_license,
            name_mother : data?.name_mother,
            phone_family : data?.phone_family,
            zone_service: data?.zone_service
        }
        if(payload){
            const save = await Driver.update(payload, {where : {driverID : id}});
            if(save){
                res.status(200).json({message : "Updated successfully"})
            }else{
                res.status(404).json({message : "Error updated"})
                return false;
            }
        }  
        }else{
            res.status(404).json({message : "Error updated"})
            return false;
        }
        
    } catch (error) {
        console.log(error)
    }
}

exports.Deleted = async (req, res) => {
    const data = req?.body;
    try {
        id = data?.id;
        CLS = data?.delete;
        if(!id) {
            res.status(404).json({message: "Deleted is required"})
            return false
        }else{
            const updateRole = await Driver.update({is_deleted : CLS}, {where: {driverID: id}})
            if(updateRole){
                res.status(200).json({message: "Deleted delete successfully"});
            }else{
                res.status(400).json({message : "Deleted not Deleted"})
            }
        }
    } catch (error) {
        console.log(error)
    }
}

exports.FindALL = async (req, res) =>{
    try {
        const data = await Driver.findAll({where : {is_deleted : false}});
        if(data){
            res.status(200).json(data);
        }else{
            res.status(404).json({message: "Data not found"})
        }
    } catch (error) {
        console.log(error);
    }
}

exports.Verify = async (req, res) =>{
    try {
        const data =  req.body;
        let kode = data?.code_verify
        let check =  await Driver.findOne({where: { code_verify: kode}});
        if(!check) {
            res.status(404).json({message: "Code Verification Not Same"})
        }else{
            const isAltif = await Driver.update({is_deleted: false}, {where: {code_verify: check?.code_verify}})
            if(isAltif){
                res.status(200).json({message: "Code Verification Success"});
            }
            
        }
    } catch (error) {
        console.log(error);
    }
}