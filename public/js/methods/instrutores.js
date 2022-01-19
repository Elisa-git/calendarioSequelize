window.onload = () => {
    Instrutores.adicionar()
}

class Instrutores {
    constructor() {
        this.nomeInstrutor = document.querySelector('#nomeInstrutor').value
        this.abreviacao = document.querySelector('#abreviacao').value
        this.email = document.querySelector('#email').value
        this.disponibilidade = document.querySelector('#disponibilidade').value
        this.pilares_id = Number(document.querySelector('#pilares_id').value)
    }

    static adicionar() {
        const form = document.querySelector('#form')

        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            const info = new Instrutores()

            await fetch("http://localhost:3000/instrutores", {
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
}