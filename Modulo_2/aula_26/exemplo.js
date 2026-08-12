const { useCallback } = require("react")

function ferverAgua(){
    console.log("Esquentar Água")

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Água fervida")
            resolve()
        }, 5000)
    })
}


function prepararCoado(){
    console.log("Passo 1")
    console.log("Passo 2")
    console.log("Passo 3")
    console.log("Passo 4")
    console.log("Passo 5")

}

function passarCafe(){
    console.log("Despejar a água sobre o pó e deixar agir.")

}

ferverAgua()
        .then(prepararCoado)
        .then(passarCafe)
        .then(() => {
            console.log("Seu café está pronto!")
        })
        .catch((error) => {
            console.error("Algo deu errado")
        })

Promise.all([
    ferverAgua(),
    Promise.resolve(prepararCoado())
]).then(passarCafe)
.catch((error) => {
    console.error('algo deu errado: ', error)
})