const express=require('express')
const morgan=require('express')
const cors=require('cors')


const userRouter = require('./routes/user.routes');
const tranferRouter= require('./routes/transfer.routes')

const app=express()


app.use(express.json())
app.use(cors())

app.use('/api/v1/bank/user',userRouter);
app.use('/api/v1/bank',tranferRouter);

module.exports=app;
