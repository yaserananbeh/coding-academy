let myDiv=document.querySelector(".box");
let color=["box-blue","box-red","box-green"]

myDiv.addEventListener("click",changeColor)
let click=1;
function changeColor(){
    myDiv.className=color[click]
    click++;
    if(click==3){
        click=0
    }
}
