const User =require('../models/user.model')
const Transfer =require('../models/tranfer.model')


exports.signup=async(req, res, next)=>{
    const { name,password }=req.body
    
    const user = await User.create({
        name,
        password
    })
    res.status(201).json({
        status:'success',
        message:'the user has been created successfuly',
        user,
    })
}

exports.login=async(req, res, next)=>{
    const { accountNumber, password }=req.body
    
    const user = await User.findOne({
        where:{
            accountNumber,
            password,
            status:'active'
        }
    })

    if (!user) {
        return res.status(404).json({
            status:'error',
            message:`user number ${accountNumber} not found`
        })
    }

    res.status(201).json({
        status:'success',
        message:'Login successfuly',
        user,
    })
    
}

exports.userTransaction=async(req, res, next)=>{
    const { id }=req.params
    const user= await User.findOne({
        where:{
            id,
            status:'active'
        }
    })
    
    if (!user) {
        return res.status(404).json({
            status:'error',
            message:'user does not exist'
        })
    }


    const allTrasaccionId= await Transfer.findAll({
        where:{
            senderUserId:user.accountNumber
        }
    })

    
    res.status(200).json({
        status:'success',
        allTrasaccionId
    })
}