const express=require("express")
const axios=require("axios")
require('dotenv').config()

const app=express.Router()
const User=require("./user.model.js")



app.get("/", async(req,res)=>{
    try{
       let users=await User.find()
       let n=users.length
       let error=false

       if(n>=50){
        res.send(users)
       }
       else{
            while(n<51 && error!==true){

                await axios.get("https://randomuser.me/api/").then((r)=>{
                        let user=new User(r.data.results[0])
                        user= user.save()
                        }).catch((err)=>{
                            error=true
                        })
                        
                    
                    if(n===50){
                        users=await User.find()
                        if(users.length>=50){
                            res.send(users)
                        }else{
                            res.status(401).send({message:"fetch failed"})
                        }
                    }
                    n++
            }
       }
    }catch(e){
        console.log(e)
        res.status(401).send({message:"error",error:e})
    }
})


// app.post("/add-user", async(req,res)=>{
//     try{
//         let user=new User(req.body)
//         user=await user.save()
//         res.send({message:"Post Successful",user})
//     }catch(e){
//         res.status(401).send({message:"signup failed",error:e})
//     }
// })

app.delete("/delete-users", async(req,res)=>{
    try {
        await User.deleteMany();
        res.send({message:'All Data successfully deleted'});
      } catch (err) {
        res.status(401).send({message:"error",error:e})
      }
})



app.get("/user-list", async(req,res)=>{
    try{
       const{page,gender}=req.query
       let s=(page-1)*10
       let users,count
       User.count({}, function(err, docCount) {
        if(err){ 
            res.status(401).send({message:"error",error:e})
            return;
        }else{
            count=docCount;
        }
       })
            if(gender){
                users=await User.find({gender:gender}).skip(s).limit(10)
            }else{
                users=await User.find().skip(s).limit(10)
            }
            console.log(count)
            res.send({users:users,total:count})
        
    
      
    }catch(e){
        res.status(401).send({message:"error",error:e})
    }
})




module.exports=app