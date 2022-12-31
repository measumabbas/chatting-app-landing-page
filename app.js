const ham = document.getElementById('ham')
const nav = document.getElementById('my-nav')
const close = document.getElementById('close')
ham.addEventListener('click',()=>{
    nav.style.top='0'
})

close.addEventListener('click',()=>{
    nav.style.top='-1000px'
})