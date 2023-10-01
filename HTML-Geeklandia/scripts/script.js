/* document.addEventListener("DOMContentLoaded", function() {
    imprimirFormulario(document.querySelector("#formulario"));
});

*/

document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("form");
    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        imprimirFormulario(formulario);
    });
});

function imprimirFormulario(formulario) {
    console.log("Teste")
    console.log("O código JavaScript está sendo executado!");
    for (const input of formulario.querySelectorAll("input")) {
        console.log(input.name, input.value);
    }
}
