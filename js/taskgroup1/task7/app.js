const form=document.querySelector("#form")
const songsContainer=document.querySelector(".songsContainer")

form.addEventListener("submit",function(e){
    e.preventDefault();
    const newSongDiv=document.createElement("div");
    newSongDiv.setAttribute("class","oneSong");
    newSongDiv.innerHTML=e.target.songText.value;
    songsContainer.append(newSongDiv)
    form.reset();
})

