const title = document.getElementById('title')
const input = document.querySelector('input')
const gezegen = document.getElementById('gezegen')
const btn = document.querySelector('button')
const container =document.getElementById('container')
const flex = document.querySelector('.flex-container')
const resim = document.getElementById('resim')
const p = document.querySelector('p')
const content = document.getElementById('content')
const buyuk = document.querySelector('buyuk')

document.body.style.backgroundImage='url(./img/galaxy.gif)'

title.style.textAlign='center'
title.style.color='white'
title.style.fontSize='70px'

container.style.display='flex'
container.style.justifyContent='center'
container.style.gap='10px'

input.style.width='300px'
input.style.height='30px'

gezegen.style.width='300px'
btn.style.width='300px'

flex.style.display='flex'
flex.style.justifyContent='center'
flex.style.alignItems='center'
flex.style.gap='30px'
flex.style.margin='40px auto'

p.style.color='white'

content.style.backgroundColor = 'rgba(255, 255, 255, 0.150)'
content.style.padding='15px'

flex.style.backgroundColor = 'rgba(255, 255, 255, 0.150)'
flex.style.width='fit-content'
flex.style.padding='30px'

btn .addEventListener('click',function hesapla(){
    let value =input.value
    let gez = gezegen.value
    let ozkutle = value/9.81
    if(value.trim() == ''|| isNaN(value)){
        p.textContent='Bir ağırlık giriniz bu yalnızca rakamlarla yapılabilir'
    }else{
        if(gez == 'dunya'){
            resim.setAttribute('src','./img/earth.png')
            let sonuc =ozkutle * 9.81
            p.textContent=`${gez} bu gezegendeki ağırlığınız ${sonuc.toFixed(2)}`
        }else if(gez == 'jupiter'){
            resim.setAttribute('src','./img/jupiter.png')
            let sonuc = ozkutle * 24.8
            p.textContent=`${gez} bu gezegendeki ağırlığınız ${sonuc.toFixed(2)}`
        }else if(gez == 'mars'){
            resim.setAttribute('src','./img/mars.png')
            let sonuc = ozkutle * 3.7
            p.textContent=`${gez} bu gezegendeki ağırlığınız ${sonuc.toFixed(2)}`
        }else if(gez == 'merkur'){
            resim.setAttribute('src','./img/mercury.png')
            let sonuc = ozkutle * 3.7
            p.textContent=`${gez} bu gezegendeki ağırlığınız ${sonuc.toFixed(2)}`
        }else if(gez == 'ay'){
            resim.setAttribute('src','./img/moon.png')
            let sonuc = ozkutle * 1.6
            p.textContent=`${gez} bu gezegendeki ağırlığınız ${sonuc.toFixed(2)}`
        }else if(gez == 'neptun'){
            resim.setAttribute('src','./img/neptune.png')
            let sonuc = ozkutle * 11.15
            p.textContent=`${gez} bu gezegendeki ağırlığınız ${sonuc.toFixed(2)}`
        }else if(gez == 'pluto'){
            resim.setAttribute('src','./img/pluto.png')
            let sonuc = ozkutle * 0.62
            p.textContent=`${gez} bu gezegendeki ağırlığınız ${sonuc.toFixed(2)}`
        }else if(gez == 'saturn'){
            resim.setAttribute('src','./img/saturn.png')
            let sonuc = ozkutle * 10.44
            p.textContent=`${gez} bu gezegengeki ağırlığınız ${sonuc.toFixed(2)}`
        }else if(gez == 'uranus'){
            resim.setAttribute('src','./img/uranus.png')
            let sonuc = ozkutle * 8.9
            p.textContent=`${gez} bu gezegengeki ağırlığınız ${sonuc.toFixed(2)}`
        }else if(gez == 'venus'){
            resim.setAttribute('src','./img/venus.png')
            let sonuc = ozkutle * 8.9
            p.textContent=`${gez} bu gezegengeki ağırlığınız ${sonuc.toFixed(2)}`
        }else{
            p.textContent='Bir gezegen seçiniz.'
        }
    }
})