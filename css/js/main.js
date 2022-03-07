window.onload = () => {
  const se = document.querySelector('#bus_sound');
  const btn = document.querySelector('#bus_button');
  const img = document.querySelector('#bus_button>img');
  const prev_img = () => {
    img.src = "images/prev_button.png";
  }

    btn.addEventListener("click", () => {
        se.play();
        img.src = "images/on_button.png";
        setTimeout(prev_img, 3000);
    });
  };
