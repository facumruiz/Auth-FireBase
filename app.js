/*DECLARO UNA FUNCION PARA MANDAR DATOS A BASE DE DATOS */

function funcion(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('email').value;

    //Funcion para crear usuarios con Email y Password 
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });



}