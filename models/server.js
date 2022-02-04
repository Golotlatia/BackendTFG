


const express = require('express');
const session = require('express-session');
const cors = require('cors')
const restRoutes = require('../routes/REST');
const userRoutes = require('../routes/userRoute');
const authRoutes = require('../routes/authRoute');

const connectDb = require("../middleware/connectionDB");

const  MongoStore = require('connect-mongo');

class Server {
  constructor () {

    this.rest='/';
    this.app = express();
    this.app.use(cors());
    this.routes();


    


    connectDb.connectToServer(function (err) {    //Creamos la conexion a la base de datos
      if (err) {
        console.error(err);
        process.exit();
      }
    });
    
  }

  routes () {

    this.app.use(

      session({
        
        store: MongoStore.create({ 
          mongoUrl: process.env.MONGODB,
          autoRemove: 'native' //Predeterminado
        }), 
      secret: "Javi asas sas",
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: (10*60*1000)
      }
    }

    ));

    this.app.get("/prueba", (req, res) =>{
      console.log(req.session.id);
      res.cookie("Cookie de prueba", "Hola que tal, esto es la información de la cookie d eprueba");
      res.cookie("Cookie de prueba2", "Hola que tal, esto es la información de la cookie de prueba2");
      res.send("Prueba funciona");
      
    })

    
   
    this.app.get("/favicon.ico", (req, res) =>{
      
      res.send("No hay favicon, ostia ya");
      
    })

    this.app.use(express.json()); //Esto es para parsear en body como JSON
    this.app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencodeds
    this.app.use(this.rest, restRoutes);
    this.app.use(this.rest, authRoutes );
    this.app.use(this.rest, userRoutes);
    
    
    
  }

  listen () {
    this.app.listen(process.env.PORT)
  }
}

module.exports = Server
