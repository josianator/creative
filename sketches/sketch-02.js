// canvas-sketch sketch-02.js --new --open
// this went to a different IP address on different wifi
// canvas-sketch sketch-02.js --output=output/02 --open
const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

// const degToRad = (degrees) => {
// 	return (degrees * Math.PI / 180 )
// };
// 
// const randomRange = (min, max) => {
// 	return ((Math.random() * (max - min)) + min);
// };
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
	/// // center
	/// const cx = (width  * 0.5);
	/// const cy = (height * 0.5);
	// corner
	const cx = (width );
	const cy = (height);
	const w = (width  * 0.01);
	const h = (height * 0.1);
	const num = 40;
	const slice = math.degToRad(360 / num);
	/// // center
	/// const radius = (width * 0.3);
	// corner
	const radius = (width);
	
	let x,y;	
	
	context.fillStyle = 'black';
	
	for (let i = 0 ; i < num ; i++) {
		const angle = (slice * i);
		
		x = (cx + radius * Math.sin(angle));
		y = (cy + radius * Math.cos(angle));
			
		context.save();
		context.translate(x, y);
		context.rotate(-angle);
		context.scale(random.range(0.1, 2), random.range(0.2, 0.5));
		
		context.beginPath();
		context.rect((-w * 0.5), random.range(0, (-h * 0.5)), w, h);
		context.fill();
		context.restore();
		
		context.save();
		context.translate(cx, cy);
		context.rotate(-angle);
		
		context.lineWidth = random.range(5, 20);
		
		context.beginPath();
		context.arc(0, 0, radius * random.range(0.7, 1.3), (slice * random.range(1, -8)), (slice * random.range(1, 5)));
		context.stroke();
		context.restore();
		
	}	
	// context.translate(100, 400);
	// 
	// context.beginPath();
	// context.arc(0, 0, 50, 0, (Math.PI * 2));
	// context.fill();
  };
};

canvasSketch(sketch, settings);
