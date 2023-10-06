function cad() {
    window.location.href = "cadastro.html";
}

const form = {
    user: () => document.getElementById("idInputEmail"),
    senha: () => document.getElementById("idInputPassword"),
}
const btlogin = document.getElementById("idLogin");

btlogin.addEventListener("click", function () {
    firebase.auth().signInWithEmailAndPassword(form.user().value, form.senha().value).then(response => {
        window.location.href = "home.html";
    }).catch(error => {
        console.log('error')
        alert(getErrorMessage(error));
    });

});

function cadastro() {
    window.location.href = "cadastro.html"
}

function cadastrar() { }

const usuario = form.user().value;
const password = form.senha().value;

firebase.auth().createUserWithEmailAndPassword(
    usuario, password
).then(() => {

    window.location.href = "main.html";
}).catch(error => {

    alert(getErrorMessage(error));
})
function getErrorMessage(error) {
    if (error.code == "auth/email-alredy-in-use") {
        return "Email já está em uso sua";
    }
    return error.message;
}
