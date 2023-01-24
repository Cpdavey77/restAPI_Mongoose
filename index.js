import express from "express";
import Routes from "./Routes/index.js"
import mongoose from "mongoose";

const app = express();

const PORT = 3000;
const URI = "mongodb://127.0.0.1:27017/newDb"

app.use(express.urlencoded({extended: false}))

app.use("/", Routes)



try{
    mongoose.connect(URI)
    app.listen(PORT, () => {
        console.log(`Express server started at port ${PORT}`);
    })
}
catch(err) {
    console.error(err);
}