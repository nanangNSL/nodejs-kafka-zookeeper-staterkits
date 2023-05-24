const {auth,role,warehouse, address,vechicle, agen, driver, feedback, booking, paymen} = require('../controllers');
const {verifyGuard} = require('../middlewares/jwtToken');
const {sendToKafka} = require('../middlewares/produser');
const {Sendmail} = require('../middlewares/emailjs');


module.exports = (app) => {
    app.get('/',(req, res) => {
        res.send("hello");
    });
    app.post("/register", auth.RegisterSU );
    app.post("/login", auth.Login);
    app.post("/refresh",verifyGuard, auth.refreshToken);
    // role
    app.post("/role", role.CreateRole );
    app.get("/role", role.FindALL );
    app.put("/role", role.Updated );
    app.delete("/role", role.Deleted );
    // warhouse
    app.post("/warehouse", warehouse.Create);
    app.put("/warehouse", warehouse.Updated);
    app.delete("/warehouse", warehouse.Deleted);
    app.get("/warehouse", warehouse.FindALL);
    // address
    app.post("/address", address.Create);
    app.put("/address", address.Updated);
    app.delete("/address", address.Deleted);
    app.get("/address", address.FindALL);
    // vechicle
    app.post("/vechicle", vechicle.Create);
    app.put("/vechicle", vechicle.Updated);
    app.delete("/vechicle", vechicle.Deleted);
    app.get("/vechicle", vechicle.FindALL);
    // agen
    app.post("/agen", agen.Create);
    app.put("/agen", agen.Updated);
    app.delete("/agen", agen.Deleted);
    app.get("/agen", agen.FindALL);
    // agen
    app.post("/driver", driver.Create);
    app.post("/driver/verify", driver.Verify);
    app.put("/driver", driver.Updated);
    app.delete("/driver", driver.Deleted);
    app.get("/driver", driver.FindALL);

    // agen
    app.post("/feedback", feedback.Create);
    app.put("/feedback", feedback.Updated);
    app.delete("/feedback", feedback.Deleted);
    app.get("/feedback",  feedback.FindALL);

    // booking
    app.post("/booking", booking.CreateBooking);
    // mail
    app.post("/mail", Sendmail);
    // pay
    app.post("/pay",sendToKafka, paymen.PayBookingBYid)


   }