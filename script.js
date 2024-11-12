const phrases = [
    "PSICOLOGIA",
    "PSICHIATRIA",
    "GERIATRIA",
    "COMUNICAZIONE",
    "GRUPPO",
    "FAMIGLIA",
    "DINAMICHE INTERPERSONALI",
    "MALATTIA",
    "DISAGIO",
    "SALUTE",
    "CURA",
    "APPRENDIMENTO",
    "MEMORIA",
    "RELAZIONE DI AIUTO",
    "ESPERIENZA"
];


function showDialog(number) {
    const dialog = document.getElementById("dialog");
    dialog.textContent = phrases[number - 1];

    const circle = document.getElementById("_" + number);
    circle.classList.add('clicked');
    //circle.classList.add('disable');
    //circle.classList.remove('');
    
}









