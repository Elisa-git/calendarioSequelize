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

    // Adiciona elemento

    static adicionar() {        
        // Seleciona todos com o id form
        const form = document.querySelector('#form')

        // Listener que criará o elemento quando o evento de submit for acionado
        form.addEventListener("submit", async (event) => {
            event.preventDefault()          //Não recarrega a página
            const info = new Reservas()          //Não recarrega a página

            // Requisição
            await fetch("http://localhost:3000/reservas", {
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
        const todos = document.querySelectorAll('#apagar')

        // Percorre os elementos com o id selecionado
        todos.forEach(function(todos) {

            // Listener que apagará o elemento quando o evento de clique for acionado
            todos.addEventListener("click", async function() {
                let id = document.getElementById('id').textContent
                this.remove()
                                
                // Requisição
                await fetch(`http://localhost:3000/reservas/${id}`, {
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

Reservas.adicionar()
Reservas.deletar()