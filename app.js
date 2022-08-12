
const express=require("express");

const bodyParser=require("body-parser");

 const mongoose= require("mongoose");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.set("view engine","ejs");

const DB="mongodb+srv://mongo:Delhi%40123@cluster0.r4ikf.mongodb.net/lifeDB"

 mongoose.connect(DB,{useNewUrlParser: true});

 const lifeSchema=new mongoose.Schema ({
   cells:Array,
   
  
  
   
 });
//  const LifeCollection = mongoose.model("LifeCollection",lifeSchema);


// const data1 = new LifeCollection ({
// cells:cellsa,

//  });
// data1.save();


app.get("/",function(req,res){
    var today=new Date();
//   LifeCollection.find({}, function(err,docs){
// if(err){console.log("hero");}
// else{console.log(docs);}
//  });

// console.log(cells);
res.render("index2",{EJS:today});

});




app.get("/about",function(req,res){
res.render("about");
});
app.listen(process.env.PORT || 4000, function()
    {
        console.log("server is running on port 3000");
    }
);