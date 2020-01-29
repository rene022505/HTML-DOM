var button = document.getElementById("button");
var h1 = document.getElementById("h1");
var index = 0;
var ul = document.getElementById("ul");
var text = document.getElementById("text");
var div = document.getElementById("hover");
var p = document.getElementById("p");

var hoverCursor = (element, welcherCursor) => {
    element.style.cursor = welcherCursor;
};

button.addEventListener("click", () => {
    h1.innerHTML = "Knopf " + ++index + " mal gedrückt!";
    if (text.value !== "") {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(text.value));
        text.value = "";
        ul.appendChild(li);
    }
});

button.addEventListener("mouseover", hoverCursor(button, "pointer"));
p.addEventListener("mouseover", hoverCursor(p, "not-allowed"));

text.addEventListener("keyup", () => {
    if (event.keyCode === 13 && text.value !== "") {
        event.preventDefault();
        button.click();
    }
});

hover.addEventListener("mouseover", () => {
    hover.classList.remove("default");
    hover.classList.add("hover");
});

hover.addEventListener("mouseout", () => {
    hover.classList.remove("hover");
    hover.classList.add("default");
});
