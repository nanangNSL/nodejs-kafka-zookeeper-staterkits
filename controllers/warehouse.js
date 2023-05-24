const {Warehouse} = require('../models')


exports.Create = async (req, res) =>{
    try {
        const data  = req?.body;
        if(data){
          let payload = {
            name : data?.name,
            image: data?.image,
            container_sender: data?.container_sender,
            temperatur: data?.temperature,
            capacity: data?.capacity,
            capacity_type : data?.capacity_type,
            address : data?.address,
            phonenumber : data?.phonenumber,
            locationID : data?.locationID,
            parked_mobile : data?.parkedMobile,
        }
        if(payload){
            const save = await Warehouse.create(payload);
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
            name : data?.name,
            image: data?.image,
            container_sender: data?.container_sender,
            temperatur: data?.temperature,
            capacity: data?.capacity,
            capacity_type : data?.capacity_type,
            address : data?.address,
            phonenumber : data?.phonenumber,
            locationID : data?.locationID,
            parked_mobile : data?.parkedMobile,
        }
        if(payload){
            const save = await Warehouse.update(payload, {where : {warehouseID : id}});
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
            res.status(404).json({message: "Warehouse is required"})
            return false
        }else{
            const updateRole = await Warehouse.update({is_deleted : CLS}, {where: {warehouseID: id}})
            if(updateRole){
                res.status(200).json({message: "Warehouse delete successfully"});
            }else{
                res.status(400).json({message : "Warehouse not Deleted"})
            }
        }
    } catch (error) {
        console.log(error)
    }
}

exports.FindALL = async (req, res) =>{
    try {
        const data = await Warehouse.findAll({where : {is_deleted : false}});
        if(data){
            res.status(200).json(data);
        }else{
            res.status(404).json({message: "data not found"})
        }
    } catch (error) {
        console.log(error);
    }
}