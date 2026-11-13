function hoverAn(e) {
    e.target.parentElement.classList.add("onIt");
}
function hoverAb(e) { 
    e.target.parentElement.classList.remove("onIt");
}
function pressed(e){
    event.preventDefault();
    e.currentTarget.classList.add("clicked")
    if (e.currentTarget.classList.contains("clicked")){
        e.currentTarget.textContent = "Abgeschlatet";
    }
    else{
        e.currentTarget.textContent = "Abschalten!";
    }

}

function initialize() {
    const schalter = ["turnOff1", "turnOff2", "turnOff3", "turnOff4"];
    for (let i = 0; i < schalter.length; i++) {
        document.getElementById("schalter-" + schalter[i]).addEventListener("mouseover", hoverAn);
        document.getElementById("schalter-" + schalter[i]).addEventListener("mouseout", hoverAb);
        document.getElementById("schalter-" + schalter[i]).addEventListener("click", pressed);
        
}
}
window.addEventListener("load", initialize);