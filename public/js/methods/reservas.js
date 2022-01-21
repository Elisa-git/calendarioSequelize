class Reservas {
    constructor() {
        this.nomeReserva = document.querySelector('#nomeReserva').value
        this.descricao = document.querySelector('#descricao').value
        this.dataInicio = Date(document.querySelector('#dataInicio').value)
        this.dataFim = Date(document.querySelector('#dataFim').value)
        this.hrInicio = tim(document.querySelector('#hrInicio').valueAsDate)
        this.hrFim = TIME(document.querySelector('#hrFim').valueAsDate)
        // this.cor = document.querySelector('#cor').value
        this.instrutores_id = Number(document.querySelector('#instrutores_id').value)
        this.turmas_id = Number(document.querySelector('#turmas_id').value)
        this.disciplinas_id = Number(document.querySelector('#disciplinas_id').value)
        this.locais_id = Number(document.querySelector('#locais_id').value)
    }

    static adicionar() {
        const form = document.querySelector('#form')

        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            const info = new Reservas()

            await fetch("http://localhost:3000/reservas", {
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
                await fetch(`http://localhost:3000/reservas/${id}`, {
                    method: "DELETE"
                }).then(async (response) => {
                    const dados = await response.json()
                    console.log(dados.message);
                })
            })            
        })
    }
}

Reservas.adicionar()
Reservas.deletar()