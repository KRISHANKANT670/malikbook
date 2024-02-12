// ************************ image slider *****************
// const slides = document.querySelectorAll('.slide');
// let currentIndex = 0;

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.style.transform = `translateX(-${index * 100}%)`;
//     });
// }

// function nextSlide() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
// }

// Automatically change slides every 3 seconds
// setInterval(nextSlide, 3000);


// ************************ image slider *****************

/* ************************ heading color change ****************** */

const heading = document.getElementById('color-changing-heading');

function changeColor() {
    const randomColor = getRandomColor();
    heading.style.color = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Change the color of the heading every 2 seconds
setInterval(changeColor, 2000);