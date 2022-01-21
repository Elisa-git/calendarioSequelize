class Especializacoes {
    constructor() {
        this.nomeEspecializacoes = document.querySelector('#nomeEspecializacoes').value
        this.pilares_id = Number(document.querySelector('#pilares_id').value)
    }

    static adicionar() {
        const form = document.querySelector('#form')

        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            const info = new Especializacoes()

            await fetch("http://localhost:3000/especializacoes", {
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
                await fetch(`http://localhost:3000/especializacoes/${id}`, {
                    method: "DELETE"
                }).then(async (response) => {
                    const dados = await response.json()
                    console.log(dados.message);
                })
            })            
        })
    }

}

Especializacoes.adicionar()
Especializacoes.deletar()