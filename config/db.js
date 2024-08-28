const mongoose=require('mongoose');
const db=
'mongodb+srv://22211a67b7:cherrydj5@bookstore-mern.xdnne.mongodb.net/?retryWrites=true&w=majority&appName=BookStore-MERN';
mongoose.set("strictQuery",true,"useNewUrlParser",true);
const connectDB=async()=>{
    try{
        await mongoose.connect(db);
        console.log("mongoose connected");
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
};
module.exports=connectDB;