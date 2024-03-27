const express=require("express");
const {getAllUser,addUser,getUser,deleteUser,updateUser}=require("../controller/UserController")

const router=express.Router();

router.get("/users",getAllUser)
router.post("/addUser",addUser)
router.get("/user/:id",getUser)
router.delete("/deleteUser/:id",deleteUser);
router.put("/updateUser/:id",updateUser);

module.exports=router;