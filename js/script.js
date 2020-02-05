let btnAddTarefa = document.querySelector("#adicionar-tarefa")
let tarefas = document.querySelector('#tarefas')
let inputTarefa = document.querySelector("#tarefa-digitada")




btnAddTarefa.onclick = function(){

    let valorDigitado = inputTarefa.value

    let tarefaNova = `<div class="col-md-4">
<div class="card-tarefa">
    <div class="texto-tarefa overflow-auto">
        ${valorDigitado}
    </div>
    <div class="botao-tarefa">
        <img src="./media/check.png" width="32" alt="Botão para finalizar tarefa"
            title="Botão para finalizar tarefa">
    </div>
</div>
</div>`


    tarefas.innerHTML += tarefaNova
}

console.log(btnAddTarefa)