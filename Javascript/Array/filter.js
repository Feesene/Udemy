//Filtra elementos 
const produtos = [
   { nome : 'notebook', preco : 2000},
    {nome : 'ipad' , preco :1000},
    {nome : 'Celular', preco : 500},
]

console.log(produtos.filter(function(p){
    return p.preco>900
}))

