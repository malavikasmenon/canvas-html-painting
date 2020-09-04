const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = '#F9F6A4';
ctx.fillRect(400, 300, 700, 400);

ctx.beginPath();
ctx.fillStyle = '#7C1010';
ctx.lineTo(750, 100);
ctx.lineTo(1200, 300);
ctx.lineTo(300, 300);
ctx.fill();

console.log('Rectangle printed');