let input = document.getElementById("inp");
let text = document.querySelector(".text");
let spaceCount = 0;

function Add() {
    if (input.value === "") {
        alert("Please Enter Task");
    } else if (input.value.trim() === "") { 
        alert("Please Enter Task");
    } else if (input.value === "    ") { 
        spaceCount++;
        if (spaceCount === 4) {
            alert("You pressed space four times consecutively. Task not added.");
        }
    } else {
        spaceCount = 0;
        let newEle = document.createElement("ul");
        newEle.innerHTML = `
            <li>${input.value} <i class="fas fa-trash-alt" onclick="removeTask(this)"></i></li>
        `;
        text.appendChild(newEle);
        input.value = "";
    }
}

function removeTask(element) {
    element.parentNode.remove();
}
function removeTask(element) {
    element.parentNode.parentNode.remove();
}
