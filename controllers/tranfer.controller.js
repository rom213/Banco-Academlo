const User =require('../models/user.model')
const Transfer =require('../models/tranfer.model')

exports.tranfer=async(req, res, next)=>{
    const { amount, senderUserId,reseiverUserId }=req.body;
    const { reseiverUser, senderUser}=req.dataUser

    const restValue  = senderUser.dataValues.amount-amount
    const sumValue  = reseiverUser.dataValues.amount+amount
    
    await senderUser.update({
        amount:restValue
    })
    await reseiverUser.update({
        amount:sumValue
    })

    const tranfer = await Transfer.create({
        amount,
        senderUserId,
        reseiverUserId
    })



    res.status(406).json({
        status:'success',
        message:`Tranferencia exitosa`,
        tranfer
    })
}