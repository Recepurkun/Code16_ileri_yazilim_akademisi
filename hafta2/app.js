const url = 'https://source.unsplash.com/random/';
const container = document.querySelector('.container');

function getRandomNumber() {
    sonuc = Math.floor(Math.random() * 100) + 1;
    console.log(sonuc);
    return sonuc;
}

for (let i = 0; i < 3; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 3; j++) {
        const col = document.createElement('div');
        col.classList.add('col-md-4');

        const imageCard = document.createElement('div');
        imageCard.classList.add('image-card'); 

        const img = document.createElement('img');
        img.src = `${url}?${getRandomNumber()}`;
        img.classList.add('img-fluid');

        imageCard.appendChild(img);
        col.appendChild(imageCard);
        row.appendChild(col);
    }
    container.appendChild(row);
}