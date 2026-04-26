function drawTails(ctx, canvas, tilt) {
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height - 110);
    ctx.rotate(tilt);

    ctx.fillStyle = "#333";
    ctx.beginPath();
    ctx.ellipse(0, 12, 42, 11, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ffff00";
    ctx.beginPath();
    ctx.ellipse(0, 10, 40, 9, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.fillStyle = "#ffa500";
    ctx.fillRect(-7, -25, 14, 25); 
    
    ctx.beginPath();
    ctx.arc(0, -32, 12, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(-5, -30, 4, 0, Math.PI * 2);
    ctx.arc(5, -30, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ffa500";
    ctx.beginPath();
    ctx.moveTo(-10, -40);
    ctx.lineTo(-15, -55);
    ctx.lineTo(0, -40);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(10, -40);
    ctx.lineTo(15, -55);
    ctx.lineTo(0, -40);
    ctx.fill();

    ctx.fillStyle = "red";
    ctx.fillRect(-12, 0, 10, 9);
    ctx.fillRect(2, 0, 10, 9);
    ctx.fillStyle = "white";
    ctx.fillRect(-12, 6, 10, 3);
    ctx.fillRect(2, 6, 10, 3);

    ctx.restore();
}
if (e.key === "t") {
    currentCharacter = "tails";
}
if (e.key === "s") {
    currentCharacter = "sonic";
}
if (currentCharacter === "tails") {
    drawTails(ctx, canvas, tilt);
} else {
    drawSonic(ctx, canvas, tilt);
}
