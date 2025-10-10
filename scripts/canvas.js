//@ts-check

/** @type { HTMLCanvasElement } */
//@ts-ignore This is an HTML Canvas
const CANVAS = document.getElementById("game-canvas");

/** @type { CanvasRenderingContext2D } */
//@ts-ignore is not null
const CTX = CANVAS.getContext("2d");
/**
 * @param { number} x
 * @param { number} y
 * @param { string} color
 */

// const HEIGHT = 600;
// const WIDTH = 800;

CANVAS.height = window.innerHeight;
CANVAS.width = window.innerWidth;
let BounceElement = document.getElementById("bounceCounter");
let Bounce = 0;
class Box {
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.bounce = Bounce;
		this.speed = 50;
		this.width = 50;
		this.height = this.width;

		this.xDirection = 1;
		this.yDirection = 1;

		this.alpha = Math.random();
	}

	draw() {
		CTX.globalAlpha = this.alpha;
		CTX.fillStyle = this.color;
		CTX.fillRect(this.x, this.y, this.width, this.height);
	}

	update() {
		let top = this.y;
		let bottom = this.y + this.width;
		let left = this.x;
		let right = this.x + this.height;

		if (top < 0) {
			// colliding with top
			this.yDirection = 1;
			this.y = 0;
			++this.bounce;
		} else if (bottom > CANVAS.height) {
			// colliding with bottom
			this.yDirection = -1;
			this.y = CANVAS.height - this.height;
			++this.bounce;
		}

		if (left < 0) {
			// colliding with left
			this.xDirection = 1;
			++this.bounce;
		} else if (right > CANVAS.width) {
			// colliding with right
			this.xDirection = -1;
			++this.bounce;
		}

		this.x += this.xDirection * this.speed;
		this.y += this.yDirection * this.speed;
	}
}
let Rgb1 = Math.floor(Math.random() * 255);
let Rgb2 = Math.floor(Math.random() * 255);
let Rgb3 = Math.floor(Math.random() * 255);

/** @type { Box[] } */
let boxes = [];

let colors = [
	"red",
	"orange",
	"purple",
	"pink",
	// "white",
	//"rgb(30, 30, 255)",
	"rgb(Rgb1, Rgb2, Rgb3)",
];

for (let i = 0; i <= 1000; i++) {
	let color = colors[Math.floor(Math.random() * colors.length)];
	let box = new Box(CANVAS.width / 2, CANVAS.height / 2, color);
	box.width = 20;
	box.height = 20;
	box.x = Math.random() * (CANVAS.width - 100);
	box.y = Math.random() * (CANVAS.height - 100);
	box.speed = Math.random() * 5 + 5;
	boxes.push(box);
}

let currentTimestamp = 0;

/**
 * @param { number} timestamp
 */
function drawLoop(timestamp) {
	//CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

	boxes.forEach((b) => {
		b.draw();
		b.update();
	});

	// console.log(elapsedTime);
	requestAnimationFrame(drawLoop);
}

requestAnimationFrame(drawLoop);

function onResize() {
	CANVAS.height = window.innerHeight;
	CANVAS.width = window.innerWidth;
}

window.addEventListener("resize", onResize);
// I tried to add a bounce counter
