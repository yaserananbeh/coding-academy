const colorBox=document.querySelectorAll(".colorBox");
const colorViewer=document.querySelector(".colorViewer");

for (let index = 0; index < colorBox.length; index++) {
    colorBox[index].addEventListener('click',function(){
       colorViewer.innerHTML=window.getComputedStyle( colorBox[index] ).getPropertyValue( 'background-color' );
       colorViewer.style.backgroundColor=window.getComputedStyle( colorBox[index] ).getPropertyValue( 'background-color' );
        if(index==4){
            colorViewer.style.color="black";
        }
        else{
            colorViewer.style.color="white"
        }
    })
}
