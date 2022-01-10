const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB);
const timersDb= require("../middleware/timersDb");



const getC = (req, res) => {
    res.send('Hola desde Get del user')
}


const postC = (req, res) => {
    //console.log(req.body);
    console.log("El usuario es: " + req.body.usuario)
    console.log("La contraseña es: " + req.body.contraseña);
    res.send('Hola desde Post del user')
}

const deleteC = (req, res) => {
    res.send('Hola desde Delete del user')
}

const patchC  = (req, res) => {
    res.send('Hola desde Patch del user')
}

module.exports = {
    getC,
    postC,
    deleteC,
    patchC

}