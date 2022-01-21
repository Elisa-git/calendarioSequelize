class Turmas {

    constructor() {
        // this.nomeTurma = document.querySelector('#nomeTurma').value
        this.codTurma = document.querySelector('#codTurma').value
        this.dataInicio = Date(document.querySelector('#dataInicio').value)
        this.dataFim = Date(document.querySelector('#dataFim').value)
        this.numAlunos = Number(document.querySelector('#numAlunos').value)
        this.especializacoes_id = Number(document.querySelector('#especializacoes_id').value)
    }

    static adicionar() {
        const form = document.querySelector('#form')

        form.addEventListener('submit', async (event) => {
            event.preventDefault()
            const info = new Turmas()

            await fetch("http://localhost:3000/turmas", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(info)
            }).then(async (response) => {
                const dados = await response.json()
                console.log(dados.message);
                setTimeout(() => {
                    location.reload()
                }, 900)
            })
        })
    }

    static deletar() {
        const todos = document.querySelectorAll('.tableRow')

        todos.forEach(function(todos) {
            todos.addEventListener("click", async function() {
                let id = document.getElementById('id').textContent
                this.remove()
                // console.log(id);
                await fetch(`http://localhost:3000/turmas/${id}`, {
                    method: "DELETE"
                }).then(async (response) => {
                    const dados = await response.json()
                    console.log(dados.message);
                })
            })            
        })
    }
}

Turmas.adicionar()
Turmas.deletar()
