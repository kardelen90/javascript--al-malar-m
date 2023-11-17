const btn =document.querySelector('button')
const wrapper = document.querySelector('#wrapper')

let zarAt = () =>{
    wrapper.innerHTML =''
    let random1 = Math.ceil(Math.random()*6)
    let random2 =Math.ceil(Math.random()*6)
    
    let div = document.createElement('div')
    let img = document.createElement('img')

    let div1 = document.createElement('div')
    let img1 = document.createElement('img')
    if(random1 == 1){
        img.setAttribute('src','/img/bir.png')
    }else if (random1 == 2){
        img.setAttribute('src','/img/iki.png')
    }else if (random1 == 3){
        img.setAttribute('src','/img/uc.png')
    }else if (random1 == 4){
        img.setAttribute('src','/img/dort.png')
    }else if (random1 == 5){
        img.setAttribute('src','/img/bes.png')
    }else if (random1 == 6){
        img.setAttribute('src','/img/altı.png')
    }

    if(random2 == 1){
        img1.setAttribute('src','/img/bir.png')
    }else if(random2 == 2){
        img1.setAttribute('src','/img/iki.png')
    }else if(random2 == 3){
        img1.setAttribute('src','/img/uc.png')
    }else if(random2 == 4){
        img1.setAttribute('src','/img/dort.png')
    }else if(random2 == 5){
        img1.setAttribute('src','/img/bes.png')
    }else if(random2 == 6){
        img1.setAttribute('src','/img/altı.png')
    }


    div.appendChild(img)
    div1.appendChild(img1)
    wrapper.appendChild(div)
    wrapper.appendChild(div1)
}