window.onload = () => {
    Disciplinas.adicionar()
}

class Disciplinas {
    constructor() {
        this.nomeDisciplina = document.querySelector('#nomeDisciplina').value
        this.pilares_id = Number(document.querySelector('#pilares_id').value)
    }

    static adicionar() {
        const form = document.querySelector('#form')

        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            const info = new Disciplinas()

            await fetch("http://localhost:3000/disciplinas", {
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