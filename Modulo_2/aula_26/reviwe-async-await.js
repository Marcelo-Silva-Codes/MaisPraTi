// function putWaterToBoil(){
//     console.log('Boil the water.')

//     setTimeout( () => {
//         console.log('We have boiled water')
//         makeCoffee()
//     }, 5000)


// }

// function getReadyToMakeCoffee() {
//     console.log('Grind coffe beans.')
//     console.log('Line the basket of your coffee maker with a filter.')
//     console.log('Wet the filter, and let it drain into your cup.')
//     console.log('Discard the wather in the cup.')
//     console.log('Measure the ground coffee into the wet filter.')
//     console.log('Grind coffe beans.')
// }


// function makeCoffee() {
//     console.log('Pour water to wet the ground beans and drain into your cup.')
// }

// putWaterToBoil()
// getReadyToMakeCoffee()
// // makeCoffee()




function ferverAgua(callback){
    console.log("esquentar agua")

    setTimeout( () => {
        console.log('Água fervida')
        // passarCafe()
        callback()
    }, 4000)

}


function prepararCoado(callback){
    console.log("Passo 1")
    console.log("Passo 2")
    console.log("Passo 3")
    console.log("Passo 4")
    console.log("Passo 5")
    callback()
}

function passarCafe(callback){
    console.log("Despejar a água sobre o pó e deixar agir.")
    callback()
}

ferverAgua()
prepararCoado()
// passarCafe()























