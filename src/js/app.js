const elements = {
    add:document.querySelector('.plus'),
    sub:document.querySelector('.negative'),
    num:document.querySelector('.number')
}

let counter = 0

elements.add.addEventListener('click',function(){
    let numberColorAdd = elements.num.textContent = counter+=1

    if(numberColorAdd >= 1){
        elements.num.style.color = "green"
    }else if (numberColorAdd === 0){
        elements.num.style.color = "white"
    }
})

elements.sub.addEventListener('click',function(){
   let numberColorSub = elements.num.textContent = counter-=1;
   if(numberColorSub < 0){
    elements.num.style.color = "red"
   }else if (numberColorSub === 0){
    elements.num.style.color = "white"
}
})