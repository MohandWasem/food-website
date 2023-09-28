var x = 0; 
var z = setInterval(function(){
    document.querySelector('.hh1').style = `width:${x}%`
    document.querySelector('.hh1').innerHTML = x;
    
    x++
    if(x > 15){
        clearInterval (z);
    }

} ,400)

var m = 0; 
var s = setInterval(function(){
    document.querySelector('.hh2').style = `width:${m}%`
    document.querySelector('.hh2').innerHTML = m;
    
    m++
    if(m > 30){
        clearInterval (s);
    }

} ,300)



document.querySelector('.btn2').onclick = function(){
    document.querySelector('.pp2').style = 'display:block;';

    setInterval (function(){
        document.querySelector('.pp2').style = 'display:none;';
    } , 5000)
}


var count = 0;

document.querySelector('.btn5').onclick = function (){
    document.querySelector('h6').innerHTML = count =  count+ 1;
    x++
    
}

document.querySelector('.btn6').onclick = function (){
    document.querySelector('h6').innerHTML = count = count - 1;
    
}


// ----------- scroll navbar--------------

window.onscroll = function(){
    // console.log(window.scrollY)
    if(window.scrollY > 100){
        document.querySelector("#navbars1").style = "width:100%;";
        document.querySelector("#navbars1").style.position = "fixed";
    }else{
        document.querySelector("#navbars1").style = "width:90%;";
        
        document.querySelector("#navbars1").style.position = "";
    }
}



// ----------------scroll ^----------------

window.onscroll = function(){
    // console.log(window.scrollY)
    if(window.scrollY > 1000){
        document.querySelector(".up").style = "display:block;";
        
    }else{
        document.querySelector(".up").style = "display:none;";

       
    }
}

document.querySelector(".up").onclick = function(){
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
}



