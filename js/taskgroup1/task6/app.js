const firstShow=document.querySelectorAll('.show')[0]
const secondShow=document.querySelectorAll('.show')[1]
const thirdShow=document.querySelectorAll('.show')[2]
const firstHide=document.querySelectorAll('.hide')[0]
const secondHide=document.querySelectorAll('.hide')[1]
const thirdHide=document.querySelectorAll('.hide')[2]
const firstSectionContent=document.querySelectorAll('.sectionContent')[0]
const secondSectionContent=document.querySelectorAll('.sectionContent')[1]
const thirdSectionContent=document.querySelectorAll('.sectionContent')[2]

firstShow.addEventListener("click",function(){
    firstSectionContent.style.display="block"
    firstShow.style.display="none"
})
firstHide.addEventListener("click",function(){
    firstSectionContent.style.display="none"
    firstShow.style.display="inline"
})
secondShow.addEventListener("click",function(){
    secondSectionContent.style.display="block"
    secondShow.style.display="none"
})
secondHide.addEventListener("click",function(){
    secondSectionContent.style.display="none"
    secondShow.style.display="inline"
})
thirdShow.addEventListener("click",function(){
    thirdSectionContent.style.display="block"
    thirdShow.style.display="none"
})
thirdHide.addEventListener("click",function(){
    thirdSectionContent.style.display="none"
    thirdShow.style.display="inline"
})
