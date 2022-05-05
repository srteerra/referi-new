require("dotenv").config();
const express = require("express");
const router = require("./routes")
const cors = require("cors")
const errors = require("./middlewares/error.handler")
const morgan = require("morgan")
const path = require("path")
//Initializaion
const app= express();
app.set("port",process.env.PORT||3000)


//-------------Middlewares-------------
app.use(cors())
app.use(morgan("tiny"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//--------------Routes-----------------

router(app)
//---------------Errors-----------------
app.use(errors.logErrors);
app.use(errors.boomErrorHandler);
app.use(errors.errorHandler);
//---------Statics files------------------
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"),()=>{
    console.log("server on port: ", app.get("port"));
})
