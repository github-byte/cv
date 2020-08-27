window.addEventListener("scroll",function()
{
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.querySelector(".nav-bar").style.backgroundColor="rgba(245,245,245,1)";
    document.querySelector(".nav-bar").style.height="100px";
    document.querySelector(".nav-bar").style.boxShadow='5px 7px 8px #888888';
    document.querySelector(".me1").style.marginTop="auto";
    document.querySelector(".me1").style.scrollBehaviour="smooth";

   

    }
    else if(document.body.scrollTop<10){
        document.querySelector(".nav-bar").style.backgroundColor="rgba(245,245,245,0.5)"
        document.querySelector(".nav-bar").style.height="150px";
        document.querySelector(".nav-bar").style.boxShadow='5px 7px 8px black';
        document.querySelector(".me1").style.marginTop="40px";
   
    }
});
document.querySelector("button").addEventListener("click",function(){
    alert("If you want to talk just e-mail!")
})


// document.querySelector(".fa-phone-alt").addEventListener("mouseOver",function(){

// })