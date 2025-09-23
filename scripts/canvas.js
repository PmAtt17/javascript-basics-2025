//@ts-check

/** @type { HTMLCanvasElement } */
//@ts-ignore This is an HTML Canvas
const CANVAS = document.getElementById("game-canvas");

const CTX = CANVAS.getContext("2d");

const HEIGHT = 600;
const WIDTH = 800;

CANVAS.height = HEIGHT;
CANVAS.width = WIDTH;