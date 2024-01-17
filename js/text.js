let text17 = document.querySelector("#text17");
let spans = text17.innerHTML.split("").map((letter, i) => {
    return `<span style="transition-delay: ${i*40}ms;
    filter:hue-rotate(${i*30}deg)">${letter}</span>`
}).join('');

text17.innerHTML = spans;
