import mongoose from "mongoose";
const BlogsSchema=mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    description:{
        type:String,
        required:true
    },
    owner:{
        type:String,
        required:true
    }
});

const Table=mongoose.model('table',BlogsSchema);
export default Table;