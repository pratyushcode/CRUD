const mongoose=require("mongoose");

const connectToDb=async()=>
{
    try {
       await  mongoose.connect("mongodb://pratyushsinhaug21:8dnXkUpEIwnuvZx1@ac-57ooj5g-shard-00-00.3hntcfn.mongodb.net:27017,ac-57ooj5g-shard-00-01.3hntcfn.mongodb.net:27017,ac-57ooj5g-shard-00-02.3hntcfn.mongodb.net:27017/?ssl=true&replicaSet=atlas-1eawwd-shard-0&authSource=admin&retryWrites=true&w=majority");
       console.log("DB is Up")
    } catch (error) {
        console.log(error);
    }   

}

module.exports=connectToDb;



//mongodb://pratyushsinhaug21:8dnXkUpEIwnuvZx1@ac-57ooj5g-shard-00-00.3hntcfn.mongodb.net:27017,ac-57ooj5g-shard-00-01.3hntcfn.mongodb.net:27017,ac-57ooj5g-shard-00-02.3hntcfn.mongodb.net:27017/?ssl=true&replicaSet=atlas-1eawwd-shard-0&authSource=admin&retryWrites=true&w=majority