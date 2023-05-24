const {AgenHub} = require('../models')


exports.Create = async (req, res) =>{
    try {
        const data  = req?.body;
        if(data){
          let payload = {
            locationID : data?.locationID,
            is_open : data?.is_open,
            cart_sender : data?.cart_sender,
            is_site : data?.is_site
        }
        if(payload){
            const save = await AgenHub.create(payload);
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
            locationID : data?.locationID,
            is_open : data?.is_open,
            cart_sender : data?.cart_sender,
            is_site : data?.is_site
        }
        if(payload){
            const save = await AgenHub.update(payload, {where : {agenID : id}});
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
            res.status(404).json({message: "Agen is required"})
            return false
        }else{
            const updateRole = await AgenHub.update({is_deleted : CLS}, {where: {agenID: id}})
            if(updateRole){
                res.status(200).json({message: "Agen delete successfully"});
            }else{
                res.status(400).json({message : "Agen not Deleted"})
            }
        }
    } catch (error) {
        console.log(error)
    }
}

exports.FindALL = async (req, res) =>{
    try {
        const data = await AgenHub.findAll({where : {is_deleted : false}});
        if(data){
            res.status(200).json(data);
        }else{
            res.status(404).json({message: "data not found"})
        }
    } catch (error) {
        console.log(error);
    }
}