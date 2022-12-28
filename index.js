const canvas = document.getElementById("canvas");
const clearBtn = document.querySelector("#clear");
const resBtn = document.querySelector("#chnageRes");
const text = document.querySelector("p");

let children = [];
let cssLine = "";
let max = 100;

createGrid(8)

function createGrid(length){
    children.forEach((child)=>{
        child.remove()
    })
    
    cssLine = "";
    text.textContent = length + "x" + length

    
    for(let i = 0; i < (length * length); i++){
        canvas.appendChild(document.createElement("div"));
    }

    for(let i = 0; i < length; i++){
        cssLine = cssLine + " auto"
    }
    canvas.style["grid-template-columns"] = cssLine;
    
    children = Array.from(canvas.children)
    children.forEach((child)=>{
        child.classList.add("box")
    })

    handleEvents()
}

resBtn.addEventListener("click", (e)=>{
    let length = prompt("enter length");
    if (length  < 1) {
        length = 16;
    } else if (length > max) {
        length = max;
    }

    createGrid(length)

})

clearBtn.addEventListener("click",()=>{
    for(child of children){
        child.style["background-color"] = "white"
    }
})



function handleEvents() {
    let active = false;

    canvas.onclick = () =>{
        active = !active
    }

    children.forEach((child)=>{
    child.addEventListener("mouseenter",()=>{
        if (active === true) {
            child.style["background-color"] = "black"
        }
    })
})
}

