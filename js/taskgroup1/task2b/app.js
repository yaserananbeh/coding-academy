let myDiv=document.querySelector(".box");
myDiv.style.backgroundColor=getRandomColor()
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

let color=["blue","red","green"]

myDiv.addEventListener("click",changeColor)
let click=1;
function changeColor(){
    myDiv.style.backgroundColor=color[click]
    click++;
    if(click==3){
        click=0
    }
}
