//imports
const express=require("express");
const connectToDb=require("./config/connectToDb")
const router=require("./routes/users")

//config
const app=express();
app.use(express.json());


//connect to Db;
connectToDb();

app.use("/api",router);




app.get("/",(req,res,next)=>
{
    res.send("hello world");
})

//port
app.listen(4000,()=>
{
    console.log("Backend is Up");
})

