const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombres: /^[a-zA-ZÁ-ÿ\s]{4,16}$/, //Letras ,numeros, guion y guion_bajo.
    apellidos: /^[a-zA-ZÁ-ÿ\s]{4,16}$/, //Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celular: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    nombres: false,
    apellidos: false,
    email: false,
    celular: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombres":
            validarCampo(expresiones.nombres, e.target, 'nombres');
        break;
        case "apellidos":
            validarCampo(expresiones.apellidos, e.target, 'apellidos');
        break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;
        case "celular":
            validarCampo(expresiones.celular, e.target, 'celular');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo-${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo-${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`grupo-${campo} i`).classList.add('bi bi-check2-circle');
        document.querySelector(`grupo-${campo} i`).classList.remove('bi bi-x-circle-fill');
        document.querySelector(`grupo-${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
        campos[campo]
    } else{
        document.getElementById(`grupo-${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo-${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`grupo-${campo} i`).classList.add('bi bi-x-circle-fill');
        document.querySelector(`grupo-${campo} i`).classList.remove('bi bi-check-circle');
        document.querySelector(`grupo-${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');
    if(campos.nombres && campos.apellidos && campos.email && campos.celular && terminos.checked){
        formulario.reset();

        document.getElementById('formulario-mensaje-exito').classList.add('formulario-mensaje-exito-activo')
        setTimeout(() => {
            document.getElementById('formulario-mensaje-exito-activo').classList.remove('formulario-mensaje-exito-activo')
        }, 4000);

        document.querySelectorAll('..formulario__grupo-correcto').forEach((icono) =>{
            icono.classList.remove('.formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario-mensaje').classList.add('formulario-mensaje-activo');
    }
});















