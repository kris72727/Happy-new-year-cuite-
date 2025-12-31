function nextScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    
    // Video auto-stop if screen changes
    if(id !== 'video-reel') {
        document.getElementById('myReel').pause();
    }
}

function startFireworks() {
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({ particleCount: 7, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#FFD700', '#FFFFFF'] });
        confetti({ particleCount: 7, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#FFD700', '#FFFFFF'] });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());

    setTimeout(() => nextScreen('video-reel'), 1500);
}

function popPhoto(el) {
    el.style.transform = "translate(200%, -50%) rotate(45deg)";
    el.style.opacity = "0";
}

function celebrateFinal() {
    confetti({ particleCount: 300, spread: 100, origin: { y: 0.6 } });
    alert("Happy New Year 2026! ❤️");
}

// Randomly tilt photos
window.onload = () => {
    document.querySelectorAll('.polaroid').forEach(p => {
        const rot = Math.floor(Math.random() * 20) - 10;
        p.style.transform = `translate(-50%, -50%) rotate(${rot}deg)`;
    });
};
