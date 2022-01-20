const axios = require("axios")

exports.retrieveBio = async(req, res) =>{
    try {
        const username = req.body.username
        const response = await axios.get(`https://bio.torre.co/api/bios/${username}`)
        res.status(200).json({data:response.data})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"An error occurred"})
    }
}

exports.skillDetails = async(req, res) =>{
    try {
        const username = req.body.username
        const id = req.body.id 
        const response = await axios.get(`https://torre.co/api/genome/bios/${username}/strengths-skills/${id}/detail`)
        res.status(200).json({data:response.data})
    } catch (error) {
        res.status(500).json({message:"An error occurred"})
    }
}