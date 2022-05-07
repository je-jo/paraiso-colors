const colors = [
    "#2f1e2e",
    "#41323f",
    "#4f424c",
    "#776e71",
    "#8d8687",
    "#a39e9b",
    "#b9b6b0",
    "#e7e9db",
    "#ef6155",
    "#f99b15",
    "#fec418",
    "#48b685",
    "#5bc4bf",
    "#06b6ef",
    "#815ba4",
    "#e96ba8",
]

const boxes = [...document.querySelectorAll(".box")];
boxes.forEach(box => {
    box.style.backgroundColor = "hotpink"
})

for (i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = colors[i];
    boxes[i].textContent = colors[i];
    if (i < boxes.length / 4) {
        boxes[i].style.color = "#e7e9db"
    }
    else {
        boxes[i].style.color = "#2f1e2e"
    }
}



boxes.forEach(box =>
    box.addEventListener("click", function (e) {
        navigator.clipboard.writeText(e.currentTarget.textContent);
    }))
