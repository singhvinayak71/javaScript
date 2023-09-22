const express = require("express");
const sendMail = require("./utils/sendMail");

const app = express();
app.use(express.json())

app.post("/sendmail", async(req,res)=>{
    const {email, name } = req.body;
    const text = `Hi thanks for register ${name}`
    const subject = "Thanks for being here"
    sendMail(email, subject, text)
    res.status(200).send({msg:"Email has been sent"})
})
app.listen(5000, ()=>{
    console.log("server is running on port 5000")
})