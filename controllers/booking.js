const {Booking} = require('../models')

exports.CreateBooking = async (req, res) =>{
    try {
        const data =  req.body;
        if(data){
            let payload = {
                name : data?.name,
                image : data?.image,
                type : data?.type,
                isAgen : data?.isAgen,
                category : data?.category,
                d_wide : data?.d_wide,
                d_width : data?.d_width,
                d_hight : data?.d_hight,
                weight : data?.weight,
                sender : data?.sender,
                no_sender : data?.no_sender,
                address_sender : data?.address_sender,
                consigne : data?.consigne,
                no_consigne : data?.no_consigne,
                address_consigne : data?.address_consigne,
                price : data?.price,
                item_value : data?.item_value,
                time_estimation : data?.time_estimation,
                noted : data?.noted
            }
            const requestBooking = await Booking.create(payload);
            if(requestBooking){
                res.status(200).json({ message : "Booking created successfully", data : requestBooking})
            }else{
                res.status(400).json({ message : "Booking  failed"})
            }
        }
    } catch (error) {
        console.log(error);
    }
}

