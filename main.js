const form = document.getElementById('form-comparar');


form.addEventListener("submit", function(e){
    e.preventDefault();

const numeroA = parseFloat (document.getElementById('numero-a').value);
const numeroB = parseFloat (document.getElementById('numero-b').value);

function comparaNumero(numeroA, numeroB){
    if (numeroB > numeroA){
        alert('Formulário válido, o valor de B é maior que A');
        return true;
    } else {
        alert('Formulário inválido, o valor de A é maior que B');
        return false;
    }
}
formEValido = comparaNumero(numeroA, numeroB)
});