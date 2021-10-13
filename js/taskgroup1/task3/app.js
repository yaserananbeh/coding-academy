let select=document.querySelector("#country");
let image=document.querySelector(".countryImage");
select.addEventListener("change",changeImage)
function changeImage(){
    image.src=`./images/${select.value}.png`
    image.alt=`${select.value}`
}