const ham = document.getElementById('ham')
const nav = document.getElementById('my-nav')
const close = document.getElementById('close')
const lang = document.querySelector('.lang-res')
ham.addEventListener('click', () => {
    nav.style.top = '0'
    lang.style.zIndex='1'
})

close.addEventListener('click', () => {
    nav.style.top = '-1000px'
    lang.style.zIndex='1000'
})


// Collapsible code

const heads = document.querySelectorAll('.faq-head')
heads.forEach((head, index) => {
    head.addEventListener('click', () => {

        const paras = document.querySelectorAll('.faq-para')
        const img = head.querySelector('img')
        const images = document.querySelectorAll('.image')
        const para = document.querySelector(`.para-${index + 1}`)
        let activeHeight = para.style.maxHeight.length
        if (para.style.maxHeight === '0px' || activeHeight === 0) {
            para.style.maxHeight = '300px'
            img.src = '/images/colapsible-minus.png'
        } else {
            para.style.maxHeight = '0px'
            img.src = '/images/colapsible-plus.png'
        }

        paras.forEach((para, i) => {
            if (para.classList.contains(`para-${index + 1}`)) {

            }
            else {
                para.style.maxHeight = '0px'
                images[i].src = '/images/colapsible-plus.png'
            }
        })
    })
})


// Language dropdown

const option = document.getElementById('lang-option')

const drop = document.querySelector('.lang-drop')
const title = document.getElementById('lang-title')
const links = document.querySelectorAll('.drop-link')
const header = document.querySelector('.header-top')

const langDropRes = document.querySelector('.lang-drop-res')
const optionRes = document.querySelector('.lang-option-res')


option.addEventListener('click', () => {
    drop.classList.toggle('display')
    // console.log(option.querySelector('span').style.color)
    // drop.style.top='40px'
    if (option.querySelector('span').style.color.length === 0 || option.querySelector('span').style.color === 'rgb(82, 82, 82)') {
        option.querySelector('span').style.color = '#FF2749'
        option.querySelector('i').style.color = '#FF2749'
    } else {
        option.querySelector('span').style.color = '#525252'
        option.querySelector('i').style.color = '#14142B'
    }

})
optionRes.addEventListener('click', () => {
    langDropRes.classList.toggle('display')
    // console.log(option.querySelector('span').style.color)
    // drop.style.top='40px'
    if (optionRes.querySelector('span').style.color.length === 0 || optionRes.querySelector('span').style.color === 'rgb(82, 82, 82)') {
        optionRes.querySelector('span').style.color = '#FF2749'
        optionRes.querySelector('i').style.color = '#FF2749'
    } else {
        optionRes.querySelector('span').style.color = '#525252'
        optionRes.querySelector('i').style.color = '#14142B'
    }

})


// const html = document.querySelector(':root')
// console.log(html.dir)
// if (html.dir === 'rtl') {

// } else {

// }
// const line = document.querySelector('.line')
// const image = document.querySelector('.banner')
// const bottom = document.querySelector('.bottom-absolute')
// const topAbs = document.querySelector('.top-absolute')

// const lineLeft = document.querySelector('.line-left')
// const imageLeft = document.querySelector('.banner-left')
// const bottomLeft = document.querySelector('.bottom-absolute-left')
// const topAbsLeft = document.querySelector('.top-absolute-left')

// if(localStorage.getItem('lang')==='p'){
//     localStorage.setItem('lang', 'p')
// }else{
//     localStorage.setItem('lang', 'e')
// }
// const change = document.querySelectorAll('.dir-change')
// if (localStorage.getItem('lang') === 'e') {
//     change.forEach((c) => {
//         c.setAttribute('dir', 'ltr')
//     })
//     if(lineLeft){
//         lineLeft.classList.remove('line-left')
//         lineLeft.classList.add('line')
//         imageLeft.classList.remove('banner-left')
//         imageLeft.classList.add('banner')
//         bottomLeft.classList.add('bottom-absolute')
//         bottomLeft.classList.remove('bottom-absolute-left')
//         topAbsLeft.classList.add('top-absolute')
//         topAbsLeft.classList.remove('top-absolute-left')
//         imageLeft.classList.remove('flip')
//         lineLeft.classList.remove('flip')
//     }
// }else{
//     change.forEach((c) => {
//         c.setAttribute('dir', 'rtl')
//     })
//     line.classList.remove('line')
//     line.classList.add('line-left')
//     image.classList.remove('banner')
//     image.classList.add('banner-left')
//     bottom.classList.add('bottom-absolute-left')
//     bottom.classList.remove('bottom-absolute')
//     topAbs.classList.add('top-absolute-left')
//     topAbs.classList.remove('top-absolute')
//     image.classList.add('flip')
//     line.classList.add('flip')
// }

// links.forEach((link, index) => {
//     link.addEventListener('click', () => {
//         const line = document.querySelector('.line')
//         const image = document.querySelector('.banner')
//         const bottom = document.querySelector('.bottom-absolute')
//         const topAbs = document.querySelector('.top-absolute')

//         const lineLeft = document.querySelector('.line-left')
//         const imageLeft = document.querySelector('.banner-left')
//         const bottomLeft = document.querySelector('.bottom-absolute-left')
//         const topAbsLeft = document.querySelector('.top-absolute-left')

//         title.textContent = link.textContent.slice(0, 3)
//         if (link.textContent === 'English') {
//             localStorage.setItem('lang', 'e')
//             change.forEach((c) => {
//                 c.setAttribute('dir', 'ltr')
//             })
//             lineLeft.classList.remove('line-left')
//             lineLeft.classList.add('line')
//             imageLeft.classList.remove('banner-left')
//             imageLeft.classList.add('banner')
//             bottomLeft.classList.add('bottom-absolute')
//             bottomLeft.classList.remove('bottom-absolute-left')
//             topAbsLeft.classList.add('top-absolute')
//             topAbsLeft.classList.remove('top-absolute-left')
//             imageLeft.classList.remove('flip')
//             lineLeft.classList.remove('flip')
//         } else {
//             localStorage.setItem('lang', 'p')
//             change.forEach((c) => {
//                 c.setAttribute('dir', 'rtl')
//             })
//             line.classList.remove('line')
//             line.classList.add('line-left')
//             image.classList.remove('banner')
//             image.classList.add('banner-left')
//             bottom.classList.add('bottom-absolute-left')
//             bottom.classList.remove('bottom-absolute')
//             topAbs.classList.add('top-absolute-left')
//             topAbs.classList.remove('top-absolute')
//             image.classList.add('flip')
//             line.classList.add('flip')
//         }
//     })
// })