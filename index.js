const express = require('express');
const app = express();
app.use((req,res,next)=>{
    console.log("Server is up and running on port 3000! Ready to handle requests.");
    res.send("<h1>Hello from Express</h1>");
    // next();
});
// app.use((req,res,next)=>{
//     console.log("This is a middleware 2");
    
// }); 
app.listen(3000);