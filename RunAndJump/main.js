const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const reactangle = {
	height: 32,
	width:32,
	jumping: false,
	width: 32,
	x: 144,
	x_velocity: 0,
	y: 0,
	y_velocity: 0
};

const controller = {
	left: false,
	right: false,
	up: false,
	keyListener (event) {
		const keyState = (event.type === 'keydown') ? true : false;
		switch(event.keyCode) {
			case 37:
			controller.left = keyState;
			break;
			case 38:
			controller.up = keyState;
			break;
			case 39:
			controller.right = keyState;
			break;
		} 
	}
}
function loop() {
	if(controller.up && reactangle.jump === false) {
		reactangle.y_velocity += 20
		reactangle.jump = true;
	}

	if (controller.left) {
		reactangle.x_velocity -= 0.5
	}
	if (controller.right) {
		reactangle.x_velocity += 0.5
	}
	reactangle.y_velocity -= .8;
	reactangle.x += reactangle.x_velocity;
	reactangle.y += reactangle.y_velocity;
	reactangle.x_velocity *=0.9;
	reactangle.y_velocity *=0.9;

	if(reactangle.y < 0) {
		reactangle.y = 0;
		reactangle.jump = false;
		reactangle.y_velocity = 0;
	}
	if(reactangle.x < 0) {
		reactangle.x = 0 
	} else if(reactangle.x > (320 - reactangle.width)) {
		reactangle.x = 320 - reactangle.width
	}

	context.fillStyle = '#000';
	context.fillRect(0, 0 ,canvas.width, canvas.height);
	context.fillStyle = '#f00';
	context.fillRect(reactangle.x, canvas.height-reactangle.height-reactangle.y, reactangle.width, reactangle.height);
	window.requestAnimationFrame(loop)
}
loop();
window.addEventListener('keydown', controller.keyListener);
window.addEventListener('keyup', controller.keyListener);