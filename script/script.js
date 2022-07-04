let title = document.querySelector(".title");
let ul = document.querySelector("ul");
let reload = document.querySelector(".reload");

window.onload= function(){

    if(window.navigator.onLine){
        online();
    }
    else{
        offline();
    }

}   
window.addEventListener("online",function(){
    online()
});
window.addEventListener("offline",function(){
    offline()
});
function online(){

    title.innerHTML= "Online Now";
    title.style.color = "green";
    ul.style.display ="none"
    reload.style.display ="none"
    
}


function offline(){
    
    title.innerHTML= "Offline Now";
    title.style.color = "#666";
    ul.style.display ="block"
    reload.style.display ="block"
}


reload.addEventListener("click",()=>{
    window.location.reload();
})

//To know 
//    window.location.reload();
// if(window.navigator.onLine){ if(window.navigator.offLine){
/*
window.addEventListener("online",function(){
    online()
});
window.addEventListener("offline",function(){
    offline()
});
 */