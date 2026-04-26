function drawKnuckles(ctx, canvas, tilt) {
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height - 110);
    ctx.rotate(tilt);

    ctx.fillStyle = "#333";
    ctx.beginPath();
    ctx.ellipse(0, 12, 48, 14, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ff0000";
    ctx.beginPath();
    ctx.ellipse(0, 10, 45, 12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = "#ff0000";
    ctx.fillRect(-12, -30, 24, 30); 
    
    ctx.beginPath();
    ctx.arc(0, -40, 16, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(-15, -45);
    ctx.lineTo(-20, -10);
    ctx.lineTo(-5, -35);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(15, -45);
    ctx.lineTo(20, -10);
    ctx.lineTo(5, -35);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(0, -18, 10, Math.PI, 0); 
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(-18, -15, 8, 0, Math.PI * 2); 
    ctx.arc(18, -15, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ffff00";
    ctx.fillRect(-15, 0, 14, 10);
    ctx.fillRect(1, 0, 14, 10);
    ctx.fillStyle = "red";
    ctx.fillRect(-8, 0, 2, 10); 
    ctx.fillRect(8, 0, 2, 10);

    ctx.restore();
}
