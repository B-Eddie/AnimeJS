document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let drawing = false;

    function startDrawing(event) {
        drawing = true;
        ctx.beginPath();
        draw(event);
    }

    function endDrawing() {
        drawing = false;
        ctx.moveTo(x, y); // add this line to start a new path
    }
    
    function draw(event) {
        if (!drawing) return;
        
        let x, y;
        if (event.touches) {
            x = event.touches[0].clientX;
            y = event.touches[0].clientY;
        } else {
            x = event.clientX;
            y = event.clientY;
        }

        ctx.lineWidth = 5; // change width
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#00295A'; // change color

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', endDrawing);
    canvas.addEventListener('mousemove', draw);

    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchup', endDrawing);
    canvas.addEventListener('touchmove', draw);

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
