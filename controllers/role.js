const { Role } = require("../models");

exports.CreateRole = async (req, res) => {
    const data = req?.body;
    let name;
    try {
        name = data?.name
        if(name){
            const checkRoles = await Role.findOne({where : {name: name}});
            if(checkRoles){
                console.log(name)
                res.status(200).json({ message : "Roles found"})
                return false;
            }else{
                const save = await Role.create({ name : name});
                if(save){
                    res.status(200).json({message : "Role created successfully"})
                 }
            }
        }else{
            res.status(400).json({message : "Please enter a role"})
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}

exports.Updated = async (req, res) => {
    const data = req?.body;
    try {
        id = data?.roleId;
        nameRoles = data?.name;
        if(!id) {
            res.status(404).json({message: "Role ID is required"})
            return false
        }else{
            const updateRole = await Role.update({name : nameRoles}, {where: {roleID: id}})
            if(updateRole){
                res.status(200).json({message: "Role ID updated successfully"});
            }else{
                res.status(400).json({message : "RoleId not updated"})
            }
        }
    } catch (error) {
        console.log(error)
    }
}

exports.Deleted = async (req, res) => {
    const data = req?.body;
    try {
        id = data?.roleId;
        CLS = data?.delete;
        if(!id) {
            res.status(404).json({message: "Role ID is required"})
            return false
        }else{
            const updateRole = await Role.update({is_deleted : CLS}, {where: {roleID: id}})
            if(updateRole){
                res.status(200).json({message: "Role ID delete successfully"});
            }else{
                res.status(400).json({message : "RoleId not Deleted"})
            }
        }
    } catch (error) {
        console.log(error)
    }
}

exports.FindALL = async (req, res) =>{
    try {
        const data = await Role.findAll({where : {is_deleted : false}});
        if(data){
            res.status(200).json(data);
        }else{
            res.status(404).json({message: "data not found"})
        }
    } catch (error) {
        console.log(error);
    }
}