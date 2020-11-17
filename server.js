const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('./dist'))
app.get('*',(req,res,next)=>{
    res.status(200).sendFile(path.resolve('./dist/base/index.html'))
})
app.listen(3000,()=>{
    console.log('port 3000 is running')
})