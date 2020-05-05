const express = require("express");
const app =  express();
const multer=require("multer");

const multerstorage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public");
    },
    filename: function(req,file,cb){
        cb(null, `{Date.now()}.jpeg`)
    }
})
//file=>type
const fileFilter=function(req,file,cb){
    if(file.mimetype.startsWith("image")){
        cb(null, true)
    }else{
        cb(new Error("not an image"), false)
    }
}
const upload = multer({
    storage: multerstorage,
    fileFilter:fileFilter
});

app.post("/acceptFile",upload.single("photo"), function(req,res){
    console.log(req.file);
    console.log(req.body);
    res.status(200).json({
        status:"file uploaded"
    })
})
app.listen(3000, function(){
    console.log("server is listening at port 3000");
})