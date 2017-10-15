const Canvas = require('canvas-prebuilt');

const canvas = new Canvas(1000, 1000);
const ctx = canvas.getContext('2d');

exports.getImage = () => {
  ctx.font = '30px Arial';
  ctx.rotate(0.1);
  ctx.fillText('Awesome!', 50, 100);

  const te = ctx.measureText('Awesome!');
  ctx.strokeStyle = 'rgba(0,0,0,0.5)';
  ctx.beginPath();
  ctx.lineTo(50, 102);
  ctx.lineTo(50 + te.width, 102);
  ctx.stroke();

  return `<img src="${canvas.toDataURL()}" />`;
};
