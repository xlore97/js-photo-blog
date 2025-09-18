const board = document.querySelector(".board");

axios.get("https://lanciweb.github.io/demo/api/pictures/")
  .then(res => {
    const items = res.data;
    let html = "";

    for (const item of items) {
      html += `
        <div class="polaroid">
          <img src="asset/img/pin.svg" class="pin" alt="puntina" aria-hidden="true">
          <img class="photo" src="${item.url}" alt="${item.title}">
          <p class="date">${item.date}</p>
          <p class="title">${item.title.toUpperCase()}</p>
        </div>
      `;
    }

    board.innerHTML = html;
  })


const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox__img');
const closeBtn = lightbox.querySelector('.lightbox__close');

board.addEventListener('click', (e) => {
  const img = e.target.closest('.photo');
  if (!img) return;
  openLightbox(img.src, img.alt || '');
});

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add('open');
  document.body.classList.add('noscroll');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.classList.remove('noscroll');
  lightboxImg.src = '';
  lightbox.setAttribute('aria-hidden', 'true');
}

closeBtn.addEventListener('click', closeLightbox);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('open')) {
    closeLightbox();
  }
});
