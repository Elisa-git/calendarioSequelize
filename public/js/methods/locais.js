class Locais {

    constructor() {
        this.nomeLocal = document.querySelector('#nomeLocal').value
        this.capacidade = Number(document.querySelector('#capacidade').value)
        this.sistemas = Number(document.querySelector('#sistemas').value)
    }

    // Adicona dados
    
    static adicionar() {
        // Seleciona todos com o id form
        const form = document.querySelector('#form')

        // Listener que criará o elemento quando o evento de submit for acionado
        form.addEventListener("submit", async (event) => {
            event.preventDefault()          //Não recarrega a página
            const info = new Locais()          //Não recarrega a página

            // Requisição
            await fetch("http://localhost:3000/locais", {
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
                
                // Requisição            
                await fetch(`http://localhost:3000/locais/${id}`, {
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

Locais.adicionar()
Locais.deletar()