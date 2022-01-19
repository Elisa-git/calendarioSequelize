class Locais {

    constructor() {
        this.nomeLocal = document.querySelector('#nomeLocal').value
        this.capacidade = Number(document.querySelector('#capacidade').value)
        this.sistemas = Number(document.querySelector('#sistemas').value)
    }
    
    static adicionar() {
        const form = document.querySelector('#form')

        form.addEventListener("submit", async (event) => {
            event.preventDefault()  //não recarregar a pg
            const info = new Locais()

            await fetch("http://localhost:3000/locais", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(info)
            }).then(async (response) => {
                const dados = await response.json()
                console.log(dados.message);
                setTimeout(()=>{
                    location.reload()
                }, 900)
            })
        })
    }
}

Locais.adicionar()