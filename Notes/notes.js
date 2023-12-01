 const notesContainer = document.querySelector(".notes-container");
 const createBtn = document.querySelector(".btn");
 let notes = document.querySelectorAll(".input-box");


 function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
 }
showNotes();
function upadeteStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
    
}

 createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box blinker";
    
    inputBox.setAttribute("contenteditable", "true");
    img.className = "delete-img";
    img.src = "delete-bin-fill.png"
    
    // notesContainer.appendChild(inputBox).appendChild(img);

    inputBox.append(img);
    notesContainer.appendChild(inputBox);
 })
 notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        upadeteStorage();
    }
    else if(e.target){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                upadeteStorage();
            }
        });
    }
 });


 document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
 })
