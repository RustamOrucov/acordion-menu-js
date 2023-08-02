const list =document.querySelectorAll('li')

for(let i=0;i<list.length;i++){
    list[i].addEventListener('click',()=>{
        list.forEach(el=>{
            el.classList.remove('active')
        })
        list[i].classList.toggle('active')
    })
}
    




