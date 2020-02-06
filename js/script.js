let btnAddTarefa = document.querySelector("#adicionar-tarefa")
let tarefas = document.querySelector('#tarefas')
let inputTarefa = document.querySelector("#tarefa-digitada")
let listaTarefas = localStorage.getItem('listaTarefas') ? JSON.parse(localStorage.getItem('listaTarefas')) : []


const salvarLocalStorage = tarefas => {
    let tarefasEmJson = JSON.stringify(tarefas)
    localStorage.setItem('listaTarefas', tarefasEmJson)
    console.log("Lista de tarefas salva com suceso!");

}

const mostrarNaTela = (arrayTarefas) => {
    arrayTarefas.forEach(textoTarefa => {
        let tarefaNova = `<div class="col-md-4">
<div class="card-tarefa">
    <div class="texto-tarefa overflow-auto">
        ${textoTarefa}
    </div>
    <div class="botao-tarefa">
        <img src="./media/check.png" width="32" alt="Botão para finalizar tarefa"
            title="Botão para finalizar tarefa">
    </div>
</div>
</div>`

        tarefas.insertAdjacentHTML('beforeend', tarefaNova)

        let objTarefaNova = tarefas.lastElementChild
        let btnRmvTarefa = objTarefaNova.lastElementChild.lastElementChild
        btnRmvTarefa.onclick = (event) => {
            tarefas.removeChild(event.target.parentNode.parentNode.parentNode)
            listaTarefas = listaTarefas.filter(valor => valor != textoTarefa)

            salvarLocalStorage(listaTarefas)

        }

    })
}

mostrarNaTela(listaTarefas)

const criarTarefaComEnter = (event) => {

    if (event.keyCode == 13 || event.type == "click") {
        if (inputTarefa.value == "") {
            alert("Digite algo!")
            return
        }
        let valorDigitado = inputTarefa.value

        listaTarefas.push(valorDigitado)
        salvarLocalStorage(listaTarefas)
        inputTarefa.value = ""

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

        tarefas.insertAdjacentHTML('beforeend', tarefaNova)

        let objTarefaNova = tarefas.lastElementChild
        let btnRmvTarefa = objTarefaNova.lastElementChild.lastElementChild
        btnRmvTarefa.onclick = (event) => {
            tarefas.removeChild(event.target.parentNode.parentNode.parentNode)
            listaTarefas = listaTarefas.filter(valor => valor != valorDigitado)

            salvarLocalStorage(listaTarefas)

        }

        console.log(objTarefaNova);
    }

}

inputTarefa.addEventListener('keypress', criarTarefaComEnter)
btnAddTarefa.addEventListener('click', criarTarefaComEnter)

console.log(btnAddTarefa)