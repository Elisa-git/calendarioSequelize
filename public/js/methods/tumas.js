class Turmas {

    constructor() {
        // this.nomeTurma = document.querySelector('#nomeTurma').value
        this.codTurma = document.querySelector('#codTurma').value
        this.dataInicio = Date(document.querySelector('#dataInicio').value)
        this.dataFim = Date(document.querySelector('#dataFim').value)
        this.numAlunos = Number(document.querySelector('#numAlunos').value)
        this.especializacoes_id = Number(document.querySelector('#especializacoes_id').value)
    }

    // Adicona dados

    static adicionar() {
        // Seleciona todos com o id form
        const form = document.querySelector('#form')

        // Listener que criará o elemento quando o evento de submit for acionado
        form.addEventListener('submit', async (event) => {
            event.preventDefault()          //Não recarrega a página
            const info = new Turmas()          //Não recarrega a página

            // Requisição
            await fetch("http://localhost:3000/turmas", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(info)
            }).then(async (response) => {
                const dados = await response.json()
                console.log(dados.message);

                // Recarrega a página
                setTimeout(() => {
                    location.reload()
                }, 900)
            })
        })
    }

    // Apagar dados

    static deletar() {
        // Seleciona todos com o id apagar
        const todos = document.querySelectorAll('#botaoConfirmarApagar')

        // Percorre os elementos com o id selecionado
        todos.forEach(function(todos) {

            // Listener que apagará o elemento quando o evento de clique for acionado
            todos.addEventListener("click", async function() {
                let id = document.getElementById('id').textContent
                this.remove()

                // Requisição
                await fetch(`http://localhost:3000/turmas/${id}`, {
                    method: "DELETE"
                }).then(async (response) => {
                    this.remove()
                    const dados = await response.json()
                    console.log(dados.message);

                    // Recarrega a página
                    setTimeout(() => {
                        location.reload()
                    })
                })
            })            
        })
    }
}

Turmas.adicionar()
Turmas.deletar()
