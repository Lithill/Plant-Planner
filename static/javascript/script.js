function pic() {
    alert("Do you want to add an image?");
}

function edit() {
    alert("Do you want to edit this plant?");
}

function scrap_question() {
    console.log("scrap question got hit")
    document.getElementById("delete-overlay").style.display = "block";
}

function scrap() {
    document.querySelector("#plant-form").classList.toggle("toggle");
    document.getElementById("delete-overlay").style.display = "none";
}

function keep_plant() {
    document.getElementById("delete-overlay").style.display = "none";
}

function submit() {
    alert("Do you want to save this plant?");
}

function addButton() {
    document.querySelector("#plant-form").classList.toggle("toggle");
}