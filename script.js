var a=0;
function clickme(){
    const bgele = document.getElementById("myDIV")
    if(a==0){
        bgele.style.backgroundColor = "yellow";
        a=1;
    }
    else{
        bgele.style.backgroundColor = "aquamarine";
        a=0;   
    }
}
let a = 0;
let box = document.getElementById('box');
let button1 = document.getElementById('button1');
button1.addEventListener('mouseover',(e)=>{
    box.style.background = "aquamarine";
    e.stopPropagation()

})
function won(){
    alert("You Won");
}
box.addEventListener('mouseover',()=>{
    box.style.background = "yellow";
    alert("You lost")
})
box.addEventListener('mouseout',()=>{
    box.style.background = "aquamarine";
})