const  url ='http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
const chineses = f => f.pais ==='China'
const mulheres = f =>f.genero === 'F'
const menor= (func,funcatual)=>{
    return func.salario<funcatual ? func : funcatual
}

axios.get(url).then(response =>{
    const funcionarios = response.data
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menor)
    console.log(func)
})