const express = require('express');
const app = express();

app.use('/product')


const port = process.env.PORT || 8000
app.listen(port,()=>console.log('Server on',port))