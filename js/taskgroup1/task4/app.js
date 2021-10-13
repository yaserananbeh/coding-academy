const textBox=document.querySelector("#textBox");
const fontFamilySelect=document.querySelector("#fontFamily")
const fontSizeSelect=document.querySelector("#fontSize")
const italicCheckBox=document.querySelector("#italic")
const boldCheckBox=document.querySelector("#bold")
const underLineCheckBox=document.querySelector("#underline")

fontFamilySelect.addEventListener("change",function(){
    textBox.style.fontFamily=fontFamilySelect.value
})
fontSizeSelect.addEventListener("change",function(){
    textBox.style.fontSize=fontSizeSelect.value
})

italicCheckBox.addEventListener("change",function(){
    if(italicCheckBox.checked){
        textBox.style.fontStyle="italic"
    }
    else{
        textBox.style.fontStyle="normal"
    }
})
boldCheckBox.addEventListener("change",function(){
    if(boldCheckBox.checked){
        textBox.style.fontWeight="900"
    }
    else{
        textBox.style.fontWeight="normal"
    }
})
underLineCheckBox.addEventListener("change",function(){
    if(underLineCheckBox.checked){
        textBox.style.textDecoration="underline"
    }
    else{
        textBox.style.textDecoration="none"
    }
})
