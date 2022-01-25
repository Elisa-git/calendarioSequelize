class Pilares {

    constructor() {
        this.nomePilar = document.querySelector('#nomePilar').value;
    }

    // Adicona dados

    static adicionar() {
        // Seleciona todos com o id form
        const form = document.querySelector('#form')

        // Listener que criará o elemento quando o evento de submit for acionado
        form.addEventListener("submit", async (event) => {
            event.preventDefault()          //Não recarrega a página
            const info = new Pilares()           //Instanciou

            // Requisição
            await fetch("http://localhost:3000/pilares", {
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

    // Editar elemento

    static editar() {
        const formEdit = document.querySelector('#formEditar')
        
        // Listener que criará o elemento quando o evento de submit for acionado
        formEdit.addEventListener("submit", async (event) => {
            const id = document.getElementById('id').textContent
            
            // Objeto com insformações do que será atualizado
            let data = {
                        nomePilar: document.getElementById('nomePilarEdit').value
                       }   
            event.preventDefault()          //Não recarrega a página
            console.log(data);

            // Requisição
            await fetch(`http://localhost:3000/pilares/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
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

    // Editar elemento

    static editar() {
        const formEdit = document.querySelector('#formEditar')
        
        // Listener que criará o elemento quando o evento de submit for acionado
        formEdit.addEventListener("submit", async (event) => {
            const id = document.getElementById('id').textContent
            
            // Objeto com insformações do que será atualizado
            let data = {
                        nomeLocal: document.getElementById('nomeLocalEdit').value,
                        capacidade: Number(document.getElementById('capacidadeEdit').value),
                        sistemas: Number(document.getElementById('sistemasEdit').value)
                       }   
            event.preventDefault()          //Não recarrega a página
            console.log(data);

            // Requisição
            await fetch(`http://localhost:3000/locais/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
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
        const todos = document.querySelectorAll('#botaoApagar')

        // Percorre os elementos com o id selecionado
        todos.forEach(function(todos) {

            // Listener que apagará o elemento quando o evento de clique for acionado
            todos.addEventListener("click", async function() {
                let id = document.getElementById('id').textContent
                this.remove()

                // Requisição
                await fetch(`http://localhost:3000/pilares/${id}`, {
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

Pilares.adicionar()
Pilares.deletar()
