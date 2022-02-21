/*Habilitar animação*/ 
const items = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    items.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animeta");
        }
        else {
            element.classList.remove("animeta");
        }
    });
};

animeScroll();

window.addEventListener("scroll", () => {
    animeScroll(); 
});

/*Validação de campos*/

const inputNome = document.querySelector(`#name`);
const inputEmail = document.querySelector(`#email`);
const labelNome = document.querySelector(`#labelNome`);
const labelEmail = document.querySelector(`#labelEmail`);
const inputEnviar = document.querySelector(`#inputEnviar`);
let camposOk = false;

inputNome.addEventListener("keyup", () => {
    if (inputNome.value.length < 3 ) {
        labelNome.innerText = `Nome (Digite um nome válido)`;
        labelNome.style.color = `red`;
        camposOk = false;
    }
    else {
        labelNome.innerText = `Nome`;
        labelNome.style.color = `#fff`;
        camposOk = true;
        validaEnviar();
    }
});

inputEmail.addEventListener("keyup", () => {
    if (inputEmail.value.length == 0) {
        labelEmail.innerText = `E-mail (Digite um email válido)`;
        labelEmail.style.color = `red`;
        camposOk = false;
    }
    else {
        labelEmail.innerText = `E-mail`;
        labelEmail.style.color = `#fff`;
        camposOk = true;
        validaEnviar();
    }
});

const validaEnviar = () => {
    if (camposOk == false) {
        inputEnviar.setAttribute("disabled", "disabled");
        inputEnviar.classList.add("disableEnviar");
    } else {
        inputEnviar.removeAttribute("disabled", "disabled");
        inputEnviar.classList.remove("disableEnviar");
    }
};

validaEnviar();

inputEnviar.addEventListener("click", () => {
    alert("Formulário enviado com sucesso!");
});

