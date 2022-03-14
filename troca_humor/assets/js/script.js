const mudarSituacao = document.querySelector("#situacao");
const trocarImg = document.querySelector("#imagens");
let botao = document.querySelector(".trocar");

function click() {

    botao.addEventListener(`click`, () => {
        if (botao.value == `primeiro`) {
            trocarImg.src = "./assets/emojis/cara_sono.svg";
            mudarSituacao.innerText = 'Cara com sono';
            botao.value = "segundo";
        } else if (botao.value == `segundo`) {
            trocarImg.src = "./assets/emojis/cara_sem_expressao.svg";
            mudarSituacao.innerText = 'Rosto sem expressão';
            botao.value = "terceiro";
        } else if (botao.value == `terceiro`) {
            trocarImg.src = `./assets/emojis/rosto_sorridente_oculos.svg`;
            mudarSituacao.innerText = `Sorriso Estiloso`;
            botao.value = `quarto`;
        } else if (botao.value == `quarto`) {
            trocarImg.src = `./assets/emojis/palhaco.svg`;
            mudarSituacao.innerText = `Cara de Palhaço`;
            botao.value = `quinto`;
        } else if (botao.value == `quinto`) {
            trocarImg.src = `./assets/emojis/rosto_sorridente_maquiavel.svg`;
            mudarSituacao.innerText = `Sorriso Maquiavélico`;
            botao.value = `sexto`;
        } else {
            trocarImg.src = `./assets/emojis/cara_feliz.svg`;
            mudarSituacao.innerText = `Cara Feliz`;
            botao.value = `primeiro`;
        }
    })
}

click();


