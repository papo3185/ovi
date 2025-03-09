// Simple Login System
function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === "") {
        document.getElementById('login-page').innerHTML = '<img src="hehe ovi.png" alt="Angry Cat" class="angry-cat"><h2>AWWWWWWWW 😘😘😘</h2>';
        setTimeout(() => {
        
        document.getElementById("login-page").style.display = "none";
        document.getElementById("main-page").classList.remove("hidden");
        startConfetti();}, 100);
    } else {
        document.getElementById('login-page').innerHTML = '<img src="angy ovi.png" alt="Angry Cat" class="angry-cat"><h2>Who u?</h2><input type="password" id="password"><button onclick="checkPassword()">Unlock</button>';
    }
}

// Confetti Effect 🎉
function startConfetti() {
    var duration = 8 * 1000; // Confetti runs for 5 seconds
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 10,
            spread: 60,
            origin: { x: Math.random(), y: Math.random() - 0.2 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// Reveal Surprise Section
function revealSurprise() {
    document.querySelector(".surprise-content").classList.remove("blurred");
}
const timelineContainer = document.querySelector(".timeline-container");

let isDown = false;
let startX;
let scrollLeft;

// Mouse Dragging Functionality
timelineContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    timelineContainer.classList.add("active");
    startX = e.pageX - timelineContainer.offsetLeft;
    scrollLeft = timelineContainer.scrollLeft;
});

timelineContainer.addEventListener("mouseleave", () => {
    isDown = false;
    timelineContainer.classList.remove("active");
});

timelineContainer.addEventListener("mouseup", () => {
    isDown = false;
    timelineContainer.classList.remove("active");
});

timelineContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - timelineContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    timelineContainer.scrollLeft = scrollLeft - walk;
});

// Scroll with Mouse Wheel (Horizontal)
timelineContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    timelineContainer.scrollLeft += e.deltaY;
});
