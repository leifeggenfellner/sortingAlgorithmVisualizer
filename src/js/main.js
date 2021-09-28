const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 500
canvas.height = 500

const arrayToSort = Array.from({length: 50}, () => Math.floor(Math.random() * 100));

const draw = () => {
    ctx.beginPath();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
}

draw();