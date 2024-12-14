const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes()

function saveNotes() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=> {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "img/delete.png";
    img.setAttribute("alt", "Delete Note");
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", (e)=> {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveNotes();
    } else if(e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                saveNotes();
            }
        });
    }
});

document.addEventListener("keydown", event => {
    if(event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});