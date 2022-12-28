const canvas = document.getElementById("canvas")
for(let i = 0; i < (16 *16); i++){
    canvas.appendChild(document.createElement("div"));
}

let children = Array.from(canvas.children)
children.forEach((child)=>{
    child.classList.add("box")
})