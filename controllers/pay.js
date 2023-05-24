const { Pay, Booking,Invoice } = require("../models");
exports.PayBookingBYid = async (req, res) => {
  try {
    const data = req?.body;
    let id = data?.bookingID;
    const forbiddenCharsRegex = /[<>#$%^&*()+\=\[\]{}\\|]/;
    const validate = (id) => {
      if (forbiddenCharsRegex.test(id)) {
        return false;
      }
    };
    if (!validate) {
      res.status(400).json({ message: "Invalid request" });
      return false;
    } else {
      const checkMails = await Booking.findByPk(id);
      if (!checkMails) {
        res.status(404).json({ message: "Booking ID_transaction not found" });
        return false;
      } else {
        let payload = {
          bookingID: id,
          method_pay: data?.method_pay,
          total_pay: data?.total_pay,
          curency: data?.curency,
          code_pay: data?.code_pay,
          billing_address: data?.billing_address,
          ID_transaction: data?.ID_transaction,
          status_pay: data?.status_pay,
          tax : data?.tax,
          disc : data?.disc,
          insurance : data?.insurance,
          noted_pay: data?.noted_pay,
        };
        if (payload) {
          const createsPay = await Pay.create(payload);
          if (!createsPay) {
            res.status(400).json({ message: "Payment Booking Failed" });
            return false;
          } else {
            let invoice = await {
                category_service : checkMails?.category,
                bookingID : checkMails?.bookingID,
                company_logo : "dummy image",
                vendor_logo : "dummy image",
                pelangganID : "Ghuest",
                name_agenHub_created : checkMails?.isAgen,
                sender : checkMails?.sender,
                address_sender : checkMails?.address_sender,
                phone_sender : checkMails?.no_sender,
                noted_sender : checkMails?.noted,
                consigne : checkMails?.consigne,
                phone_consigne : checkMails?.no_consigne,
                address_consigne : checkMails?.address_consigne,
                method_pay : createsPay?.method_pay,
                d_wide : checkMails?.d_wide,
                d_width : checkMails?.d_width,
                d_hight : checkMails?.d_hight,
                weight : checkMails?.weight,
                tax :createsPay?.tax,
                disc : createsPay?.disc,
                price : createsPay?.total_pay,
                item_value : checkMails?.item_value,
                insurance : createsPay?.insurance,
                history: [ "successfully payments"],
            }
            if(invoice){
                const generateInvoice = await Invoice.create(invoice);
                if(generateInvoice){
                    res.status(200).json({ message: "Package delivery was successful", generateInvoice })
                }
            }
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};
