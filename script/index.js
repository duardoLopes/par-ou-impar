
const input = document.querySelector('#inputValue');
const results = document.querySelector('#results');
const btn_enviar = document.querySelector('#enviar');
const btn_verificar = document.querySelector('#verificar');
const btn_limpar = document.querySelector('#limpar');
let valores = [];

const recebeValues = () => {
    input.value === '' ? alert('insira um número') : valores.push(parseInt(input.value));
    input.value = '';
    results.innerHTML = '';
    for (let i = 0; i < valores.length; i++) {
            results.innerHTML += `<h3 class='btn'>${valores[i]}</h3>`;      
    }
};

const verificaValues = () => {
    results.innerHTML = '';
    for (let i = 0; i < valores.length; i++) {
        const resultado = valores[i] % 2;
        if (resultado === 1) {
            results.innerHTML += `<h3 class='btn'>${valores[i]} - número ímpar</h3>`;
        } else {
            results.innerHTML += `<h3 class='btn'>${valores[i]} - número par</h3>`;
        }
    }
}

const limparResultados = () => {
    valores.length === 0 ? alert('sem resultados para apagar!') : valores = [];
    results.innerHTML = '';
}

btn_enviar.addEventListener('click', recebeValues);
btn_verificar.addEventListener('click', verificaValues);
btn_limpar.addEventListener('click', limparResultados);
