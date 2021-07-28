function falar(seg, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, seg * 1000)
    })
}

falar(3, 'Que legal')
    .then(frase => frase.concat('teste'))
    .then(outrafrase => console.log(outrafrase))