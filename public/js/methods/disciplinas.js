class Disciplinas {
    constructor() {
        this.nomeDisciplina = document.querySelector("#nomeDisciplina")
        this.pilares_id = document.querySelector("#pilares_id")
    }

    static adicionar() {
        const form = document.querySelector("#form")

        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            const info = new Disciplinas()

            await fetch("http://localhost:3000/disciplinas", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(info)
            }).then(async (response) => {
                const dados = await response.json()
                
                setTimeout(() => {
                    location.reload()
                }, 900)
                console.log(dados.message);
            })
        })
    }

}

Disciplinas.adicionar()