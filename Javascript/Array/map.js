const nums = [1,2,3,4,5]

let resultado = nums.map(function(e){
    return e * 2
})
console.log(nums);
console.log(resultado);

const soma10 = e => e + 10
const multiplica = e => e * 3.2
const dinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
resultado = nums.map(soma10).map(multiplica).map(dinheiro)
console.log(resultado)