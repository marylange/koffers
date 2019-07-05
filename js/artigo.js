var firebaseConfig = {
    apiKey: "AIzaSyDtqzeOp7m8wAKbkIVzE-IdMWA9PqUptj4",
    authDomain: "novo-formulario.firebaseapp.com",
    databaseURL: "https://novo-formulario.firebaseio.com",
    projectId: "novo-formulario",
    storageBucket: "novo-formulario.appspot.com",
    messagingSenderId: "25676338228",
    appId: "1:25676338228:web:0a44269971c62324"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var message = firebase.database().ref('leads');

document.addEventListener("DOMContentLoaded", function () {
    
    var form = document.getElementById("getLeads");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        var nome = getInputValues("nome");
        var sobreNome = getInputValues("sobreNome");
        var email = getInputValues("email");
        var ipUser = getInputValues("ipUser");

        var data = new Date();
        var yyyymmdd =  data.getFullYear()+ "-" + pad(data.getDate()) + "-" + pad(data.getMonth() + 1) + " " + data.toLocaleTimeString() ;


        saveMessages(email, nome+" "+sobreNome, ipUser, "B2B", yyyymmdd);
    });

    
});

function getInputValues(id){
    return document.getElementById(id).value;
}

function count(){
    console.log(456);
}

function saveMessages(email, nome, ip, tipo, data){
 var messagesRef = message.push();

    messagesRef.set({
        email: email,
        nome: nome,
        ip: ip,
        tipo: tipo,
        data: data
    });

    alert('Muito Obrigado! Você sera redirecionado para o ebook.')
    window.open('https://drive.google.com/file/d/1i0Vkghyd8i3VXuNgCYdnyqY7aCIZK4Va/view', '_blank');
}

function pad(n) {
    return n<10 ? '0'+n : n;
}

 