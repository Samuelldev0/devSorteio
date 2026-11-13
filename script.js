const button = document.querySelector(".btn-sortear")
    function sorteio(){
        const inputEntre =  Number(document.querySelector(".input-entre").value)
        const inputE = Number(document.querySelector(".input-e").value)

        const prizeDraw = Math.floor(Math.random() * (inputE - inputEntre + 1)) + inputEntre

        const result = document.querySelector(".result")

        if(inputEntre < inputE){
            result.innerHTML = prizeDraw
        } else {
            result.innerHTML = "Digite um intervalo válido"
        }

    }



button.addEventListener("click", sorteio)