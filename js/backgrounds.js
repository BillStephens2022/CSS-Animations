let section = document.querySelector("#box7");
let j = 0;

while(j < 200) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    star.style.left = `${x}px`;
    let y = Math.floor(Math.random() * window.innerHeight);
    star.style.top = `${y}px`;

    let size = Math.random() * 4;
    star.style.width = `${1 + size}px`;
    star.style.height = `${1 + size}px`;

    let duration = Math.random() * 2;
    star.style.animationDuration = `${duration + 1}s`;

    section.appendChild(star);
    j++;
}

let sun = document.querySelector("#sun8");
let scene = document.querySelector("#box8");

sun.addEventListener("click", () => {
    scene.classList.toggle("night");
})

let video = document.querySelector(".video");
let thumbs = document.querySelectorAll(".navigation li");

thumbs.forEach((thumb, i) => {
  thumb.addEventListener("click", () => {
    video.src = `../images/videos/video${i + 1}.mp4`;
  })
});

