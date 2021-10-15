const pass1Input=document.querySelector("#pass1")
const pass1Error=document.querySelector(".pass1Error")
const pass2Input=document.querySelector("#pass2")
const pass2Error=document.querySelector(".pass2Error")
const submitBtn=document.querySelector("#submit")

pass1Input.addEventListener("keyup",checkPass1)
function checkPass1(){
    // console.log(pass1Input.value.length)
    if(pass1Input.value.length<6){
        pass1Error.style.display="inline"
        submitBtn.style.display="none"
    }
    else if(pass2Input.value!=pass1Input.value){
        pass1Error.innerHTML="doesn't match"
        pass1Error.style.display="inline"
        submitBtn.style.display="none"
    }
    else{
        pass1Error.style.display="none"
    }
}
pass2Input.addEventListener("keyup",checkPass2)
function checkPass2(){
    // console.log(pass2Input.value.length)
    if(pass2Input.value!=pass1Input.value || pass2Input.value.length<6 ||pass2Input.value.length!=pass1Input.value.length){
        pass2Error.style.display="inline"
        submitBtn.style.display="none"
    }
    else{
        pass1Error.style.display="none"
        pass2Error.style.display="none"
        submitBtn.style.display="block"
    }
}


