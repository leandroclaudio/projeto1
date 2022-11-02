const gabarito = "VENTO";

const linha1 = document.getElementById("L1");
const linha2 = document.getElementById("L2");
const linha3 = document.getElementById("L3");
const linha4 = document.getElementById("L4");
const linha5 = document.getElementById("L5");
const linha6 = document.getElementById("L6");

const res1 = document.getElementById("res1")
const res2 = document.getElementById("res2")
const res3 = document.getElementById("res3")
const res4 = document.getElementById("res4")
const res5 = document.getElementById("res5")
const res6 = document.getElementById("res6")

const btn = document.querySelectorAll(".btntest")
console.log(btn)


const wordgab = gabarito.split("")

// function win() {
//     if (linha1 == gabarito || linha2 == gabarito) {        
//         console.log("Você ganhou!")
//     }
//         return        
// }


function testar () {
    const word1 = linha1.value.split("")
    const word2 = linha2.value.split("")
    const word3 = linha3.value.split("")
    const word4 = linha4.value.split("")
    const word5 = linha5.value.split("")
    const word6 = linha6.value.split("")

    const igual1 = wordgab.filter(item => word1.includes(item));
    igual1.forEach((curent, index)=> {
        const letra1 = document.createElement("span")
        letra1.innerHTML = curent
        res1.appendChild(letra1)
    }) 
    // res3.innerHTML = `Seu chute 1 acertou as seguintes letras: ${igual1}`

    
    const igual2 = wordgab.filter(item => word2.includes(item));   
}

btn.forEach((curent)=> {
    curent.addEventListener("click", () => testar())  
})













// document.addEventListener("keyup")

//DEIXAR COMENTÁRIOS AQUI, FALANDO SOBRE AS FUNÇÕES. precisa ter classe.










