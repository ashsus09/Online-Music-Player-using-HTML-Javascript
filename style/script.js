window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        " rgb(14, 39, 62)",
        " rgb(223, 94, 220)",
        "rgb(218, 234, 43)",
        " rgb(144, 145, 233)",
        " rgb(225, 89, 40)"
    ]

    //lets getgoing with the sound here
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();


            createBubbles(index);
        });

    });

    //create a function that make s bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function () {
            visual.removeChild(this);
        });
    };
});



