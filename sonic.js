function drawSonic(ctx, canvas, tilt) {
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height - 110);
    ctx.rotate(tilt);

    ctx.fillStyle = "#00ff00";
    ctx.beginPath();
    ctx.ellipse(0, 10, 38, 10, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#0000ff";
    ctx.fillRect(-8, -30, 16, 30); 
    ctx.beginPath();
    ctx.arc(0, -40, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-12, -45);
    ctx.lineTo(-25, -35);
    ctx.lineTo(-12, -30);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(-13, -10, 5, 0, Math.PI * 2);
    ctx.arc(13, -10, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "red";
    ctx.fillRect(-15, 0, 12, 10);
    ctx.fillRect(3, 0, 12, 10);
    ctx.fillStyle = "white";
    ctx.fillRect(-15, 2, 12, 3);
    ctx.fillRect(3, 2, 12, 3);

    ctx.restore();
}
<script src="sonic.js"></script>
drawSonic(ctx, canvas, tilt);
        let gearX = canvas.width / 2;
        let drift = 0;
        let isDrifting = false;

        function drawPlayer() {
            ctx.save();
            ctx.translate(gearX + (drift * 20), canvas.height - 110);
            ctx.rotate(tilt + (drift * 0.5));

            ctx.fillStyle = "#222";
            ctx.beginPath();
            ctx.ellipse(0, 15, 45, 12, 0, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = "#00ff00";
            ctx.beginPath();
            ctx.ellipse(0, 10, 42, 10, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "#00f2ff";
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.fillStyle = "#0000ff";
            ctx.fillRect(-8, -35, 16, 35);
            ctx.beginPath();
            ctx.arc(0, -45, 15, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(-12, -50);
            ctx.lineTo(-28, -40);
            ctx.lineTo(-12, -35);
            ctx.fill();

            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(-14, -15, 5, 0, Math.PI * 2);
            ctx.arc(14, -15, 5, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = "red";
            ctx.fillRect(-16, 0, 13, 11);
            ctx.fillRect(4, 0, 13, 11);
            ctx.fillStyle = "white";
            ctx.fillRect(-16, 3, 13, 3);
            ctx.fillRect(4, 3, 13, 3);

            if (isDrifting) {
                ctx.shadowBlur = 15;
                ctx.shadowColor = "cyan";
                ctx.strokeStyle = "rgba(0, 255, 255, 0.5)";
                ctx.beginPath();
                ctx.moveTo(-40, 20);
                ctx.lineTo(-60, 40);
                ctx.stroke();
            }

            ctx.restore();
        }

        window.onkeydown = (e) => {
            if (e.key === "ArrowLeft") {
                playerX += 2.5;
                tilt = -0.3;
                if (e.shiftKey) { isDrifting = true; drift = -1; }
            }
            if (e.key === "ArrowRight") {
                playerX -= 2.5;
                tilt = 0.3;
                if (e.shiftKey) { isDrifting = true; drift = 1; }
            }
        };

        window.onkeyup = () => {
            tilt = 0;
            isDrifting = false;
            drift = 0;
        };
