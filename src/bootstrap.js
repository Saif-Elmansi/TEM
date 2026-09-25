import express from "express"
const bootstrap = async() => {

    const app =express()
    const port = 3000

    app.listen(port ,(req,res,next)=>{
        console.log("server is running .....");
        
    })
}
export default bootstrap