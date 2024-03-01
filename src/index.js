const express =require('express')

import configViewEngine from './configs/viewEngine.js';
import configMiddleware from './configs/middleware.js';



const app = express();
const port =8081

configMiddleware(app);
configViewEngine(app);


app.get("/home",(req,res)=>{
res.render("home")
})


app.listen(port,()=>{
    console.log("Server is running on port 8081")
})