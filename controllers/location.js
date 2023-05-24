const {Location} = require("../models")


exports.Create = async (req, res) =>{
    try {
        const data  = req?.body;
        if(data){
          let payload = {
            address : data?.address,
            locality : data?.locality,
            city : data?.city,
            province : data?.province,
            postal_code : data?.postal_code,
            latitude : data?.latitude,
            atitude : data?.atitude,
        }
        if(payload){
            const save = await Location.create(payload);
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
            address : data?.address,
            locality : data?.locality,
            city : data?.city,
            province : data?.province,
            postal_code : data?.postal_code,
            latitude : data?.latitude,
            atitude : data?.atitude,
            id : data?.id
        }
        if(payload){
            const save = await Location.update(payload, {where : {locationID : id}});
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
            res.status(404).json({message: "Location is required"})
            return false
        }else{
            const updateRole = await Location.update({is_deleted : CLS}, {where: {locationID: id}})
            if(updateRole){
                res.status(200).json({message: "Location delete successfully"});
            }else{
                res.status(400).json({message : "Location not Deleted"})
            }
        }
    } catch (error) {
        console.log(error)
    }
}

exports.FindALL = async (req, res) =>{
    try {
        const data = await Location.findAll({where : {is_deleted : false}});
        if(data){
            res.status(200).json(data);
        }else{
            res.status(404).json({message: "data not found"})
        }
    } catch (error) {
        console.log(error);
    }
}