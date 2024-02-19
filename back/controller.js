const { model } = require('mongoose');
const studentmodel = require('./modals')

const adduser = async(req,res)=>{
    const { fname, lname, email,phone,userid,password }=req.body;
    console.log(fname,lname,email,phone,userid,password)

    try{
        const userdata = new studentmodel({
            fname, lname, email, phone, userid, password
        })
        const data = await userdata.save()

        res.status(200).send({data})
    }
    catch(err){
        console.log(err)
        res.status(400).send({err})
    }
}

const getdata = async(req, res)=>{
    try{
        const userdata = await studentmodel.find()
        res.status(200).send({userdata})
    }
    catch(err){
        res.status(400).send({err})
        console.log(err)
    }
}



const updateuser=async (req,res)=>{
    try{
        const {email}=req.params
        const {fname}=req.body
        const data=await studentmodal.updateOne(
            {email},
            {
                $set:{fname,lname}

            }


        )
        if(data.modifiedCount>0){
            res.status(200).send({msg:"data update successfully"})
        }
        else{
            res.status(400).send({msg:"data  not update"})
        }

    }catch(err){
            console.log(err);
            res.status(500).send({msg:"user not found"})
    }
}

const deleteuser = async(req,res)=>{
    try{
        const {email}=req.params
        const data=await studentmodel.deleteOne({email})
        if(data.deletedCount>0){
            res.status(200).send({msg:"data deleted successfully"})
        }
        else{
            res.status(400).send({msg:"data  not deleted"})
        }

    }catch(err){
        console.log(err);
        res.status(500).send({msg:"user not found"})
}
}



module.exports = {adduser, getdata,deleteuser,updateuser}