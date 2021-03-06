
var mongodb = require('mongodb');


const dbo = require("../middleware/connectionDB");

async function addTimer (req, res) {


  console.log("He llegado hasta el addTimer");
  console.log("El mensaje recibido es: " + JSON.stringify(req.body));

  const dbConnect = dbo.getDb();

  const  dbresult =  await dbConnect
    .collection("documents")
    .insertOne(req.body);
    
    
    console.log("La respuesta del servidor es: " +  JSON.stringify(dbresult));

    res.send(dbresult)
}


const postC = (req, res) => {
    res.send('Hola desde Post del REST')
}

async function deleteTimer  (req, res)  {
    
  console.log('El temporizador recibido es: ' + JSON.stringify(req.body));
  

  const dbConnect = dbo.getDb();

  const  dbresult =  await dbConnect
    .collection("documents")
    .deleteOne({"_id": new mongodb.ObjectID(req.body._id)});
    
    
    console.log("La respuesta del servidor es: " +  JSON.stringify(dbresult));

    res.send(dbresult)
}

const patchC  = (req, res) => {
    res.send('Hola desde Patch del REST')
}

const read  = async function(req, res) {
    const dbConnect = dbo.getDb();

  dbConnect
    .collection("documents")
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
     } else {
        res.json(result);
      }
    });


}


module.exports = {
    read,
    addTimer,
    postC,
    deleteTimer,
    
    patchC,

}