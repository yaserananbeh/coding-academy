let myDiv=document.querySelector('.greeting-message');

myDiv.addEventListener("mouseover",log)
function log(){
    myDiv.innerHTML="Can I help you?"
}
myDiv.addEventListener("mouseleave",out)
function out(){
    myDiv.innerHTML="Hello World!"
}