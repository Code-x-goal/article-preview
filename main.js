function trigger(){
    document.getElementById("pop").style.display="flex";
    document.getElementById('footer').style.zIndex="-1";
    const screenWidth = window.innerWidth;
    if(screenWidth >500){
        document.getElementById('footer').style.zIndex="unset";
        document.getElementById('footer').style.marginBottom="-100px";
    }
    else{
        document.getElementById('footer').style.zIndex="-1";
        document.getElementById('footer').style.marginBottom="unset";

    }
}

function off(){
    document.getElementById("pop").style.display="none";
}

