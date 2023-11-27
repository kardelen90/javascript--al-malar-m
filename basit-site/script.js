const navbar = document.querySelector('nav')
const kapsayıcı = document.querySelector('.kapsayıcı')

window.addEventListener('scroll',function(e){
    if(window.scrollY>0){
        navbar.classList.remove('bg-body-tertiary')
        navbar.classList.add('bg-transparent')
    }else{
        if(navbar.classList.contains('navbar-dark')){
            navbar.classList.add('bg-black')
            navbar.classList.remove('bg-transparent')
        }else{
            navbar.classList.add('bg-body-tertiary')
            navbar.classList.remove('bg-transparent')
        }
    }
})

const input = document.querySelector('.yokol')

input.addEventListener('change',function(){
    if(this.checked){
        document.body.style.backgroundColor = 'black'
        navbar.classList.remove('bg-body-tertiary')
        navbar.classList.add('navbar-dark')
        kapsayıcı.style.borderColor = 'white'
    }else{
        document.body.style.backgroundColor = 'white'
        navbar.classList.add('bg-body-tertiary')
        navbar.classList.remove('navbar-dark')
        kapsayıcı.style.borderColor ='black'
    }
})