const myh1 = document.getElementById('myh1');
const move = 10; // Adjust movement speed
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        event.preventDefault();
        myh1.textContent = "😍";
        myh1.style.backgroundColor = "yellow";

        switch(event.key) {
            case "ArrowUp":
                y -= move;
                break;
            case "ArrowDown":
                y += move;
                break;
            case "ArrowLeft":
                x -= move;
                break;
            case "ArrowRight":
                x += move;
                break;
        }

        myh1.style.transform = `translate(${x}px, ${y}px)`;
    }
});

document.addEventListener("keyup", event => {
    if (event.key.startsWith("Arrow")) {
        myh1.textContent = "😊";
        myh1.style.backgroundColor = "blue";
    }
});
