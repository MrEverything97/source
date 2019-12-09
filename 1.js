document.addEventListener("DOMContLoaded",function(){
    var nut=document.getElementsByClassName('nut');
    var sua=document.getElementsByClassName('sua');
    nut.onclick=function(){
        sua[0].classList.add('an');
    }
},false)