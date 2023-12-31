const express = require('express')
const app = express();
const port = 8000;


//use express router 
app.use('/',require('./routes/index'))

app.set('view engine','ejs');
app.set('views','./views')

app.listen(8000,function(error){
    if (error) {
        console.log(`Error in running the server : ${error}`); //interpolation with back tick
    }
    console.log(`server is running on port : ${port}`)
})