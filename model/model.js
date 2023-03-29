const mongoose=require("mongoose");

const dataschema=new mongoose.Schema({

    book:{type:String,required:true}
})

module.exports=mongoose.model("book",dataschema);