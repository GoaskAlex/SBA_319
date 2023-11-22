import mongoose from "mongoose";
//Schema

const yugiSchema = new mongoose.Schema({
    name:{
        type:String, 
        required:true
    },
    starLevel:{
        type:Number ,
        required:false
    },
    cardType:{
        type:String, 
        required:true
    },
});

//

const yugi = mongoose.model('Yugi', yugiSchema);


export default mongoose.model('Yugi', yugiSchema)