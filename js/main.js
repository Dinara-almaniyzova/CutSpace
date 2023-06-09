const form =document.querySelector('.form');
const input = document.querySelector('.form__input');

input.addEventListener('focus', () => {
    form.classList.add('form-active')
})

input.addEventListener('blur', () =>{
    form.classList.remove('form-active')
})

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('burger').addEventListener('click', function(){
        document.querySelector('nav').classList.toggle('open')
    })
})