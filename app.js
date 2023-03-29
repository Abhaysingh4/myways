const express=require("express")
const mongoose=require('mongoose');
const routes=require("./routes/routes")
const Model=require("./model/model")
require('dotenv').config();


const app=express();

const DATABASE="mongodb+srv://nathabhay249:abhay@cluster0.nhel7di.mongodb.net/books"

app.use(express.json());

app.use("/api",routes);

mongoose.connect(DATABASE).then(()=>{

    app.listen(3000,()=>{
        console.log("connected")
    });
}).catch(err=>{
    console(err);
});
