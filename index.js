`use strict`;

const express = require('express');
const app = express();
require('dotenv').config()
const port  = process.env.PORT;
const helmet = require('helmet');
const cors = require('cors');
const path = require('path')
const corsOptionsDelegate = require('./middlewares/cors')
// const {error, notFound} = require('./middlewares/error.handler')
// connect DB
const db = require('./models')
const connect  = async () => {
  try {
    // await db.sequelize.sync();
    // drop the table if it already exists
    await db.sequelize.sync({ alter: true }).then(() => {
      console.log("Database Conected")
      console.log("Drop and re-sync db.");
    });
  } catch (error) {
    console.log(error)
  }
}
connect();


// middlewares
app.use(cors(corsOptionsDelegate))
// app.use(error);
// app.use(notFound);


// for use module
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use('/static', express.static(path.join(__dirname, 'public')))
require("./routes/index")(app);

// starting server
app.listen(port || 8080, () => {
    console.log(`Q-Log app listening on port ${port}`);
  })