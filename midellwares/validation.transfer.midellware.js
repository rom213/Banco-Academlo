const User =require('../models/user.model')

exports.validationTranfer=async(req, res, next)=>{
    const { amount, senderUserId,reseiverUserId }=req.body;
    
    const reseiverUser= await User.findOne({
        where:{
            accountNumber:reseiverUserId,
            status:'active'
        }
    })
    if (!reseiverUser) {
        return res.status(404).json({
            status:'error',
            message:`Reseiver user account number ${reseiverUserId} not found`
        })
    }
    const senderUser= await User.findOne({
        where:{
            accountNumber:senderUserId,
            status:'active',
        }
    })
   
    if (!senderUser) {
        return res.status(404).json({
            status:'error',
            message:`sender User number account ${senderUserId} not found`
        })
    }

    if (senderUserId===reseiverUserId) {
        return res.status(406).json({
            status:'error',
            message:`You cannot transfer from your account to your account.`
        })
    }
    
    if(senderUser.dataValues.amount < amount){
        return res.status(406).json({
            status:'error',
            message:`Insufficient balance to make the transfer`
        })
    };
    req.dataUser={
        reseiverUser,
        senderUser
    };
    next()
}
