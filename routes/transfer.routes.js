const express=require('express')

const tranfercontroller=require('../controllers/tranfer.controller')
const validationTranfer=require('../midellwares/validation.transfer.midellware')


const tranferRouter=express.Router();

tranferRouter.post('/transfer',validationTranfer.validationTranfer,tranfercontroller.tranfer)



module.exports=tranferRouter