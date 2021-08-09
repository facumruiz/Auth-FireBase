/*DECLARO UNA FUNCION PARA MANDAR DATOS A BASE DE DATOS */

const db = firebase.firestore();

const todoForm = document.getElementById('todo_form');

const create = (name, url, description) => {
    db.collection('tasks').doc().set({
        name,
        url,
        description
    })
}

todoForm.addEventListener('submit', async e => {
    e.preventDefault();
    const name = todoForm['todo_name'].value;
    const url = todoForm['todo_url'].value;
    const description = todoForm['todo_description'].value;

    await create(name, url, description); // Llamo a mi función create

    todoForm.reset(); // Reseteamos los campos
});


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