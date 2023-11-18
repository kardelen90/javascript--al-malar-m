 // const tas = document.querySelector('.tas')
// const kagıt = document.querySelector('.kagıt')
// const makas = document.querySelector('.makas')



const oyun = document.querySelector('.oyun')
const sonuc = document.querySelector('.sonuc')
const kullanıcı = document.querySelector('.kullanıcı')
const bilgisayar = document.querySelector('.bilgisayar')

let kullanıcıSkor = 0
let bilgisayarSkor = 0

oyun.addEventListener('click',(e)=>{
    let bilg = ['tas','kagıt','makas']
    let random = Math.trunc(Math.random()*3)
    let bilgSecim = bilg[random]

    console.log(bilgSecim)
    let tıklanan = e.target
    if(!tıklanan.matches('img')){
        return
    }
    if(tıklanan.classList.contains('tas')){
        if(bilgSecim == 'tas'){
            sonuc.textContent = 'Beraberlik'
        }else if(bilgSecim == 'makas'){
            kazandınız()
        }else{
            kaybettiniz()
        }
    } else if(tıklanan.classList.contains('kagıt')){
        if(bilgSecim == 'tas'){
            kazandınız()
        }else if(bilgSecim == 'makas'){
            kaybettiniz()
        }else{
            sonuc.textContent = 'Beraberlik'
        }
    }else if(tıklanan.classList.contains('makas')){
        if(bilgSecim == 'tas'){
            kaybettiniz()
        }else if(bilgSecim == 'makas'){
            sonuc.textContent = 'Beraberlik'
        }else{
            kazandınız()
        }
    }
})

function kazandınız(){
    sonuc.textContent = 'Kazandınız'
    kullanıcıSkor += 1
    kullanıcı.textContent = kullanıcıSkor
}
function kaybettiniz(){
    sonuc.textContent = 'Kaybettiniz'
    bilgisayarSkor += 1
    bilgisayar.textContent = bilgisayarSkor
}