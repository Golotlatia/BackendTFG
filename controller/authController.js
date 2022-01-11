

const jwt = require('jsonwebtoken');

let javi = {
    usuario: 'javi',
    contraseña: 'contraseña de javi+'
};

const getToken = (req, res) => {


    let token = jwt.sign(javi, process.env.PRIVATEKEY);

    
    res.status(200).send({
        'token':token});

    console.log("Token enviado");
}

const verifyToken = (req, res) => {

    console.log('recibido petición de verifiacion de token');

    
    const tokenReceived = req.header('auth-token');

    if(tokenReceived){
        console.log(tokenReceived);
        let tokenDecoded    
  
        try{
            tokenDecoded = jwt.verify(tokenReceived, process.env.PRIVATEKEY);
            if (tokenDecoded){
                res.status(200).send({
                    'respuesta': 'true'});
            }

        } catch(error){
            if(error!=undefined){
                res.send({
                    'respuesta': 'Error - Token Inválido'});
                
            }

        }

    }else{
        res.send({
            'respuesta': 'No hay token'});
    }
          
       
   
  
    
}





module.exports = {
    getToken,
    verifyToken

}





// Verificar la firma del token.
//let tokendecoded = jwt.verify(token, process.env.PRIVATEKEY);

//console.log(tokendecoded);



