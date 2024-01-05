const input = document.getElementsByTagName('input')[0]
const btn = document.getElementsByClassName('btn')[0]
const div = document.getElementById('wrapper')
const uyarı = document.querySelector('.alert')

input.addEventListener('keyup',(e)=>{
    if(e.keyCode == 13){
        kaydet()
    }
})

function kaydet(){

    let value = input.value
    if(value.trim() != ''){
        let box = document.createElement('div')
        box.addEventListener('click',yapıldı)
        box.style.display='flex'
        box.style.justifyContent='space-between'
        box.style.padding='10px'
        let p = document.createElement('p')
        p.style.margin='0px'
        let span = document.createElement('span')
        span.addEventListener('click',sil)
        p.textContent=value
        span.innerHTML='<i class="fa-solid fa-trash"></i>'
    
        box.appendChild(p)
        box.appendChild(span)
        div.appendChild(box)
        input.value=''
      
    }else{
        uyarı.classList.remove('d-none')
        setTimeout(uyarıyıKaldır,3000)
    }

}
function uyarıyıKaldır(){
    uyarı.classList.add('d-none')
}

// Add ekler remove kaldırır toggle eğer yoksa ekler var ise kaldırır.
function sil(){
    let eminMisin= confirm('Silmek istediğine emin misin?')
    if(eminMisin){
        this.parentElement.style.display='none'
    }
}

function yapıldı(){
    this.classList.toggle('bg-danger')
    this.classList.toggle('text-decoration-line-through')
}