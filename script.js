document.addEventListener("DOMContentLoaded", function() {
    const particleContainer = document.getElementById("particle-container");
    let isPageVisible = true;

    const audio = new Audio("audio/music.mp3");
    audio.loop = true;
    audio.play();

    function createParticle() {
        if (isPageVisible) {
            const particle = document.createElement("div");
            particle.className = "particle";
            particle.style.left = Math.random() * window.innerWidth + "px";
            particle.style.animationDuration = Math.random() * 4 + 2 + "s";
            particle.style.backgroundImage = "url('heart.png')";
            particleContainer.appendChild(particle);

            particle.addEventListener("animationend", function() {
                particle.remove();
            });
        }
    }

    function generateParticles() {
        setInterval(createParticle, 1000);
    }

    generateParticles();

    document.addEventListener("visibilitychange", function() {
        isPageVisible = document.visibilityState === "visible";
        if (isPageVisible) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});

