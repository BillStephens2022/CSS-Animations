let text17 = document.querySelector("#text17");
let spans17 = text17.innerHTML.split("").map((letter, i) => {
    return `<span style="transition-delay: ${i*40}ms;
    filter:hue-rotate(${i*30}deg)">${letter}</span>`
}).join('');

text17.innerHTML = spans17;

let text18 = document.querySelector("#text18");
let spans18 = text18.innerText.split("").map((letter, i) => {
    return `<span style="animation-duration: ${Math.random() * 5}s;
    filter: hue-rotate(${i*50}deg)">${letter}</span>`
}).join('');

text18.innerHTML = spans18;
