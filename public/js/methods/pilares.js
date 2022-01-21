class Pilares {

    constructor() {
        this.nomePilar = document.querySelector('#nomePilar').value;
    }

    static adicionar() {
        const form = document.querySelector('#form')

        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            const info = new Pilares()           //Instanciou

            await fetch("http://localhost:3000/pilares", {
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
                await fetch(`http://localhost:3000/pilares/${id}`, {
                    method: "DELETE"
                }).then(async (response) => {
                    const dados = await response.json()
                    console.log(dados.message);
                })
            })            
        })
    }
}

Pilares.adicionar()
Pilares.deletar()
