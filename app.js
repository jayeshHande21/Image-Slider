let images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];



var i = 0;

let canvas = document.querySelector("#canvas");

let arrows = document.querySelector(".arrow");

const object =  `url(./images/${images[0]})`;



canvas.style.background = object;



    arrows.addEventListener('click', function (e) {
        if (e.target.id === "right") {
            i--;
            if (i < 0) {
                i = images.length - 1;
            }
            canvas.style.background = `url(./images/${images[i]})`;
        } else if (e.target.id === "left") {
            i++;
            if (i >= images.length) {
                i = 0;
            }
            canvas.style.background = `url(./images/${images[i]})`;
        }
    });
