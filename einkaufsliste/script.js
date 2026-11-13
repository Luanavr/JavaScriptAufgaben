window.addEventListener("load", initialize);
const field = document.getElementById("add-input");
const btn = document.getElementById("add-btn");
btn.addEventListener("click", whenClicked);

function initialize() {
   console.log('Guten Tag und viel Spass mit der Einkaufsliste :-)');
}

field.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      whenClicked();
    }
});

function whenClicked(){
   const inputField = document.getElementById("add-input");
   
   if (inputField.value != ""){
   const list = document.querySelector("ul");
   const newItem = document.createElement("li");
   newItem.addEventListener("click", setDone);
   newItem.innerHTML = inputField.value;
   inputField.value = "";
   inputField.focus()   
   const deletBtn = document.createElement("button");
   deletBtn.textContent = "x";
   deletBtn.addEventListener("click", function (e){
    e.target.parentElement.remove();
    e.stopPropagation();
   })
   newItem.append(deletBtn);
   list.appendChild(newItem);
    }
}    
 
function setDone(e) {
    e.target.classList.toggle("done");
}