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

    
        const videoContainers = document.querySelectorAll(".rounded-video");

        videoContainers.forEach((container) => {
            container.addEventListener("click", function () {
                const fullscreenOverlay = document.createElement("div");
                fullscreenOverlay.classList.add("fullscreen-overlay");
    
                const iframeClone = this.querySelector("iframe").cloneNode(true);
                fullscreenOverlay.appendChild(iframeClone);
    
                const overlayContent = document.createElement("div");
                overlayContent.classList.add("fullscreen-overlay-content");
                overlayContent.innerHTML = "Click anywhere to close";
                fullscreenOverlay.appendChild(overlayContent);
    
                fullscreenOverlay.addEventListener("click", function () {
                    fullscreenOverlay.remove();
                });
    
                document.body.appendChild(fullscreenOverlay);
            });
        });
    });
});

