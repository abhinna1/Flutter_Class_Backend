const express = require('express');

const app = express()

app.use('/', (req, res)=>{
    console.log('listening mf')
})

app.listen(3001, ()=>{
    console.log('Server is running on port 3001.');
})
