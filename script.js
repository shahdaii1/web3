let nameInput = document.getElementById("nameInput");
let greetBtn = document.getElementById("greetBtn");

let helloList = document.getElementById("helloList");
let goodbyeList = document.getElementById("goodbyeList");

let helloTitle = document.getElementById("helloTitle");
let goodbyeTitle = document.getElementById("goodbyeTitle");

// Greet Function
function greet() {

    let name = nameInput.value.trim();

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    let li = document.createElement("li");

    li.textContent = name;

    li.onclick = function () {
        sayGoodbye(name, li);
    };

    helloList.appendChild(li);

    helloTitle.textContent = "Hello, " + name + "!";

    nameInput.value = "";
}

// Goodbye Function
function sayGoodbye(name, li) {

    let goodbyeItem = document.createElement("li");

    goodbyeItem.textContent = name;

    goodbyeList.appendChild(goodbyeItem);

    li.remove();

    goodbyeTitle.textContent = "Goodbye, " + name + "!";
}

// Button Event
greetBtn.onclick = greet;