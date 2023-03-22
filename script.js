// const arrayStrings = ["marcelo","jessica","clara"]
// const arrayNova = arrayStrings.slice()
// arrayNova.push("kakau")

// console.log(arrayStrings)
// console.log(arrayStrings.length)
// console.log(arrayStrings[2])
// console.log(arrayNova)


// const arrayNumber = [10, 8, 0]


// const arrayValoresDiferentes = ["bom dia", 5, true]
// console.log(arrayValoresDiferentes)
// confirm.log(typeof arrayValoresDiferentes[2] === "boolean" )

// const arrayValor = [100]
// console.log(arrayValor[0])


// const arraySemValor = []
// console.log(arraySemValor)

const array = [11, 55, 56, 75, 34, 865, 8123]
const arrayCopia = array.slice()
arrayCopia.pop()
arrayCopia.push(6)
arrayCopia.splice(2,1)
console.log("Array original",array)
console.log("Array modificado",arrayCopia)
