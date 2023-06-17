
import Table from "../Model/Table.js"

export const postData=async(req,res)=>{
    const data=req.body
    const result=await Table.create({
        name:'zahid',
        description:'zahid is MERN Stack Developer at AptechMedia',
        owner:'AptechMedia'

    })
    res.json({
        status:'success',
        result
    
    })
}
export const getData=async(req,res)=>{
    const result=await Table.find();
    res.json({
        status:'success',
        result
    
    })
}