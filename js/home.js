function drop(v) {
    answers = document.getElementsByClassName("ans");
    answer = answers[v-1];
    display = window.getComputedStyle(answer).getPropertyValue('display');
    if(display == "none") {
        answer.style.display = "block";
    }
    else {
        answer.style.display = "none";
    }  
}
function to_cta() {
    elem = document.querySelector("#email");
    elem.scrollIntoView({behaviour: 'smooth', block: 'center'});
    elem.focus();
    
}
function show() {
    document.body.style.overflow = "hidden";
    document.querySelector("#mobile_menu").style.display = "grid";
    document.querySelector("#x").style.opacity = "0";
    setTimeout(function dBurger() {
        document.querySelector("#x").style.opacity = "1";    
    }, 700)
    
    
}
function remove() {
    setTimeout(function dBurger() {
        document.querySelector("#x").style.opacity = "0";
        setTimeout(function ret() {
            document.querySelector("#mobile_menu").style.display = "none";
            document.body.style.overflowY = "scroll";    
        }, 500);
    }, 300)
    
}
function inView(el, percent = 100) {
    topp = el.getBoundingClientRect().top;
    
    if(topp <= ((window.innerHeight || document.documentElement.clientHeight) * (percent/100))) {
        if (topp < 0) {
            return(0)
        }
        return(1)    
    }
    else {
        return(0)
    }
     
}
function displayEl(el) {
    el.style.opacity = 1;
}
function hideEl(el) {
    el.style.opacity = 0;
}
document.querySelectorAll(".change").forEach(function initAnim(el) {
    el.style.opacity = 0;   
})
window.addEventListener("scroll", function scrollChanges(){
    list = document.querySelectorAll(".change");
    list.forEach(function real_Event(el) {
        if (inView(el, 100) == true) {
            displayEl(el);
        }
    })
});