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

