let formEmail = document.getElementById("email");
let btnFormLogin = document.getElementById("lg-btn");
let mensajeError = document.getElementById("mensaje-error");

formEmail.addEventListener("change", ()=> {
  if (!validarEmail(formEmail.value)){
    formEmail.classList.remove("formValido");
    formEmail.classList.add("formInvalido");
    btnFormLogin.disabled = true;
    mensajeError.style.display = "block";
  } else{
    formEmail.classList.remove("formInvalido");
    formEmail.classList.add("formValido");
    btnFormLogin.disabled = false;
    mensajeError.style.display = "none";
  }
});

function validarEmail (email){
    for (let i = 0; i< email.length; i++ ){
        if (email[i] === '@'){
            return true;
        }
    }
    return false;
}