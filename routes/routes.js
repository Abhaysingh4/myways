const express=require("express");
const router=express.Router();

router.post("/post",(req,res)=>{
    res.send("post api")
});

router.post("/post",(req,res)=>{
    res.send("post api");
})

router.get("/getOne/:id",(req,res,next)=>{
    res.send("get by id")
})

router.patch("/update/:id",(req,res)=>{
    res.send("update by id")
})

router.delete("/delete/:id",(req,res)=>{
    res.send("delete by id")
})


router.post("/book",(req,res,next)=>{
    const data=new Model({
      book:req.body.book,
    })
})
module.exports=router;