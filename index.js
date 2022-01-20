require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")
const bioRoutes = require("./routes/bio")

const app = express()

app.use(bodyParser.json())

app.use(cors())

app.use("/api/bio", bioRoutes)
app.use('/static', express.static('static'))

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});
(() =>{
    try {
        app.listen(process.env.PORT,  () => {
        console.log(`My app listening on port ${process.env.PORT}`)
    })
        
    } catch (error) {
        console.log(error);
    }
})();