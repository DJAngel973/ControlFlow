let count = 0;

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue() {
    if (count === 10) {
        alert("¡Tu publicación de Instagram ganó 10 seguidores! ¡Felcicidades!");
    } else if (count === 20) {
        alert("¡Tu publicación de Instagram ganó 20 seguidores! ¡Sigue así!");
    }
}

function restartCount() {
    if (count > 0) {
        count -= count;
        alert("Conteo de seguidores ha sido restablecido");
    }
}