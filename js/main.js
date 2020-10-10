var currSlide=1;
slideShow(currSlide);

function moveSlide(k){
    slideShow(currSlide+=k);
}

 function slideShow(n){
    var slides=document.getElementsByClassName("sh");
    if(n>slides.length){
        currSlide=1;
    }
    if(n<1&& currSlide<1){
        currSlide=slides.length;
    }
    for(var i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slides[currSlide-1].style.display="block";
}

function clrfunction(){

    var ele=document.getElementById("navbar");
    if(window.pageYOffset!=0){
        ele.classList.remove("clrfade");
        ele.classList.add("clrgain");
        ele.style.backgroundColor="rgba(80, 80, 80, 0.8)";
    }
    else if(window.pageYOffset==0){
        ele.classList.remove("clrgain");
        ele.classList.add("clrfade");
        ele.style.backgroundColor="transparent";
    }
}