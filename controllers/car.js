const {Car} = require('../models')


exports.Create = async (req, res) =>{
    try {
        const data  = req?.body;
        if(data){
          let payload = {
            car_name : data?.car_name,
            car_image : data?.car_image,
            type : data?.type,
            brand : data?.brand,
            made_in : data?.made_in,
            made_years : data?.made_years,
            history_driver : data?.history_driver,
            history_maintenance : data?.history_maintenance,
            inventaris : data?.inventaris,
            inventaris_time : data?.inventaris_time,
            is_vendor : data?.is_vendor,
        }
        if(payload){
            const save = await Car.create(payload);
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
            car_name : data?.car_name,
            car_image : data?.car_image,
            type : data?.type,
            brand : data?.brand,
            made_in : data?.made_in,
            made_years : data?.made_years,
            history_driver : data?.history_driver,
            history_maintenace : data?.history_maintenance,
            inventaris : data?.inventaris,
            inventaris_time : data?.inventaris_time,
            is_vendor : data?.is_vendor,
        }
        if(payload){
            const save = await Car.update(payload, {where : {carID : id}});
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
            res.status(404).json({message: "Vechicle is required"})
            return false
        }else{
            const updateRole = await Car.update({is_deleted : CLS}, {where: {carID: id}})
            if(updateRole){
                res.status(200).json({message: "Vechicle delete successfully"});
            }else{
                res.status(400).json({message : "Vechicle not Deleted"})
            }
        }
    } catch (error) {
        console.log(error)
    }
}

exports.FindALL = async (req, res) =>{
    try {
        const data = await Car.findAll({where : {is_deleted : false}});
        if(data){
            res.status(200).json(data);
        }else{
            res.status(404).json({message: "data not found"})
        }
    } catch (error) {
        console.log(error);
    }
}