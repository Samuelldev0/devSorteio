const button = document.querySelector(".btn-sortear")
    function sorteio(){
        const inputEntre =  Number(document.querySelector(".input-entre").value)
        const inputE = Number(document.querySelector(".input-e").value)

        const prizeDraw = Math.floor(Math.random() * (inputE - inputEntre + 1)) + inputEntre

        const result = document.querySelector(".result")

        result.innerHTML = prizeDraw
        
    }



button.addEventListener("click", sorteio)