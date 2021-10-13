const form=document.querySelector("#form")
const songsContainer=document.querySelector(".songsContainer")

form.addEventListener("submit",function(e){
    e.preventDefault();
    const newSongDiv=document.createElement("div");
    newSongDiv.setAttribute("class","oneSong");
    newSongDiv.innerHTML=e.target.songText.value;
    songsContainer.append(newSongDiv)
    const deleteBtn=document.createElement("p");
    deleteBtn.setAttribute("class","deleteBtn")
    deleteBtn.innerHTML="X";
    newSongDiv.append(deleteBtn)
    deleteBtn.addEventListener('click',function(){
        newSongDiv.remove();
    })
    

    form.reset();
})

