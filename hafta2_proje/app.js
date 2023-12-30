const url = "https://source.unsplash.com/random/";
const content = document.querySelector('.content');
const container = document.querySelector(".slideshow-container");

function getRandomNumber() {
    return Math.floor((Math.random() * 200) + 1);
}

// Resim kartları oluşturma
for (let i = 0; i < 3; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 3; j++) {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = `${url}?+${getRandomNumber()}`;

        card.appendChild(img);
        row.appendChild(card);
    }
    content.appendChild(row);
}

// Otomatik slider için resim alma
for (let i = 0; i < 10; i++) {
    const mySlideFade = document.createElement("div");
    mySlideFade.classList.add("mySlides", "fade");
    const imgSlide = document.createElement("img");
    imgSlide.src = `${url}?+${getRandomNumber()}`;

    mySlideFade.appendChild(imgSlide);
    container.appendChild(mySlideFade);
}

// Otomatik sliderı değiştirme fonksiyonu
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 10000); // 10 saniyede bir değiştir
}

showSlides();