const canvas = document.getElementById("canvas");
let children;

function createGrid(length){
    children.remove
    for(let i = 0; i < (length * length); i++){
        canvas.appendChild(document.createElement("div"));
    }

    children = Array.from(canvas.children)
    children.forEach((child)=>{
        child.classList.add("box")
    })
}