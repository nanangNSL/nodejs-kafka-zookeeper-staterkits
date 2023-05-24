const {Feedback} = require('../models')


exports.Create = async (req, res) =>{
    try {
        const data  = req?.body;
        if(data){
          let payload = {
            userID : data?.userID,
            driverID : data?.driverID,
            carID : data?.carID,
            bookingID : data?.bookingID,
            description : data?.description
        }
        if(payload){
            const save = await Feedback.create(payload);
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
            driverID : data?.driverID,
            carID : data?.carID,
            bookingID : data?.bookingID,
            description : data?.description
        }
        if(payload){
            const save = await Feedback.update(payload, {where : {feedbackID : id}});
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
            res.status(404).json({message: "Feedback is required"})
            return false
        }else{
            const updateRole = await Feedback.update({is_deleted : CLS}, {where: {feedbackID: id}})
            if(updateRole){
                res.status(200).json({message: "Feedback delete successfully"});
            }else{
                res.status(400).json({message : "Feedback not Deleted"})
            }
        }
    } catch (error) {
        console.log(error)
    }
}

exports.FindALL = async (req, res) =>{
    try {
        const data = await Feedback.findAll({where : {is_deleted : false}});
        if(data){
            res.status(200).json(data);
        }else{
            res.status(404).json({message: "data not found"})
        }
    } catch (error) {
        console.log(error);
    }
}