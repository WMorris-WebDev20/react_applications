const express = require("express")
const morgan = require('morgan')
const app = express()

const PORT = process.env.PORT || 9000

app.use(express.json()) 
app.use(morgan ('dev'))

app.use("/bounty", require("./routes/bountyRouter"))

app.use((err, req, res, next) => {
    console.log(err)
    res.send({errMsg: err.message})
})

app.listen(PORT, () =>{
    console.log(`Bounty Hunter Server is running and listeneing to port ${PORT}!!`) 
}); 
