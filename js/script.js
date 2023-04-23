//select word in the placeholder to modify them
const el=document.querySelector("#words");

// to modify the initial color of the word in placeholder
function setColor(){
    const colorInput=document.querySelector("#colorInput");
    const colorValue=colorInput.value;
    el.style.color=colorValue;
}

function toggleUnderline(){
    el.classList.toggle("underline");
}

function toggleItalic(){
    el.classList.toggle("italic");
}

function toggleBold(){
    el.classList.toggle("bold");
}

function toggleMonospace(){
    el.classList.toggle("mono");
}

function removeFormat(){
    el.classList.remove("underline", "italic", "bold", "mono");
    el.style.color="black";
}