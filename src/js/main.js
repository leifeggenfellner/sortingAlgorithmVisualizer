"use strict";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 500;

const arrayToSort = Array.from({length: 50}, () => Math.floor(Math.random() * 100));

const draw = () => {
    const borderWidth = 2;
    const offset = 2 * borderWidth;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.beginPath();
    ctx.fillStyle = "#FFF"
    for (let i = 0; i < arrayToSort.length; i++) {
        ctx.fillRect((canvas.width / arrayToSort.length) * i, canvas.height - borderWidth, canvas.width / arrayToSort.length, -5 * arrayToSort[i]);
        ctx.rect((canvas.width / arrayToSort.length) * i, canvas.height - borderWidth, canvas.width / arrayToSort.length, -5 * arrayToSort[i]);
    }
    ctx.closePath();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.stroke();
}

draw();
