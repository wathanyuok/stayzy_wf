const express = require('expres');
const app = express()

const port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on', port))