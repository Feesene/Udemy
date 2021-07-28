function novoElemento(tagName,className){
    const elem = document.createElement(tagName)
    elem.className = className
    return elem

}
function Barreira(reversa = false){
    this.elemento = novoElemento('div','barreira')

    const borda = novoElemento('div','borda')
    const corpo = novoElemento('div','corpo')

    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`

}

// const b = new Barreira(true)
// b.setAltura(200)
// document.querySelector('[wm-flappy').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x){
    this.elemento = novoElemento('div','par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)

    }

        this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
        this.setX = x => this.elemento.style.left = `${x}px`
        this.getlargura = () => this.elemento.clientWidth
        this.sortearAbertura()
        this.setX(x)
        
}

// const b = new ParDeBarreiras (550, 300, 500)
// document.querySelector('[wm-flappy').appendChild(b.elemento)

function Barreiras(altura, largura, abertura, espaco, notificarPonto){
    this.pares= [
        new ParDeBarreiras (altura,abertura, largura),
        new ParDeBarreiras (altura,abertura, largura+espaco),
        new ParDeBarreiras (altura,abertura, largura+espaco*2),
        new ParDeBarreiras (altura,abertura, largura+espaco*3)
    ]
    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX()-deslocamento)
            if (par.getX() < -par.getlargura() ){
                par.setX(par.getX()+ espaco * this.pares.length)
                par.sortearAbertura()
            }
            const meio = largura/2
            const cruzouOMeio = par.getX() + deslocamento >= meio
            && par.getX() < meio
            if (cruzouOMeio) notificarPonto()
        })
    }
}

function Passaro(alturaJogo){
    let voando = false
    this.elemento = novoElemento('img','passaro')
    this.elemento.src = 'imgs/passaro.png'
    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`
    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturamaxima = alturaJogo - this.elemento.clientHeight
        if(novoY <= 0){
            this.setY(0)

        }else if (novoY >= alturamaxima){
            this.setY(alturamaxima)
        }else{
            this.setY(novoY)
        }
    }
    this.setY(alturaJogo/2)
}




function Progresso(){
    this.elemento = novoElemento ('span','progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

const barreiras = new Barreiras(500,1200,250,400)
const passaro = new Passaro(700)
const areaDoJogo = document.querySelector('[wm-flappy]')
areaDoJogo.appendChild(passaro.elemento)
areaDoJogo.appendChild(new Progresso().elemento)
barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
setInterval(() => {
    barreiras.animar()
    passaro.animar()
    
}, 20);

function flappyBird(){
    let pontos = 0 
    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura  = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new progresso()
    const barreiras = new barreiras(altura,largura,200,400,
        () => progresso.atualizarPontos)

}