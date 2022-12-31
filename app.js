const ham = document.getElementById('ham')
const nav = document.getElementById('my-nav')
const close = document.getElementById('close')
ham.addEventListener('click',()=>{
    nav.style.top='0'
})

close.addEventListener('click',()=>{
    nav.style.top='-1000px'
})


// Collapsible code

const heads = document.querySelectorAll('.faq-head')
heads.forEach((head,index)=>{
    head.addEventListener('click',()=>{

        const paras = document.querySelectorAll('.faq-para')
        const img = head.querySelector('img')
        const images = document.querySelectorAll('.image')
        const para = document.querySelector(`.para-${index+1}`)
        let activeHeight = para.style.maxHeight.length
        if (para.style.maxHeight === '0px' || activeHeight === 0) {
            para.style.maxHeight = '300px'
            img.src='/images/colapsible-minus.png'
        } else {
            para.style.maxHeight = '0px'
            img.src='/images/colapsible-plus.png'
        }   
        
        paras.forEach((para,i)=>{
            if(para.classList.contains(`para-${index+1}`)){
            
            }
            else{
                para.style.maxHeight = '0px'
                images[i].src='/images/colapsible-plus.png'
            }
        })
    })
})