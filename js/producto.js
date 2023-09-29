const detalle = JSON.parse(localStorage.getItem("libro_elegido"));
const volver = document.querySelector(".bxs-left-arrow");
const detalle_libro = document.getElementById("detalle");

detalle.forEach((libro) => {
  const calificacion = ["🌠", "🌠", "🌠", "🌠", "🌠"];

  for (let i = 0; i < libro.calificacion.length; i++) {
    calificacion[i] = "🌟";
  }

  let estructura_card = `
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-6">
        <div class="card-body">
          <h1 class="card-title principal">${libro.titulo}</h1>
          <h2 class="card-title secundario">${libro.autor}</h2>
          <h5 class="card-title"><span>Editorial:</span> ${libro.editorial}</h5>
          <p class="card-text card_1">
            ${libro.descripcion}
          </p>
          <h3 class="card-title estrella">${calificacion.join("")}</h3>
          <h3 class="card-title">$${libro.precio}</h3>          
        </div>
      </div>
      <div class="col-md-6">
        <img
          src="images/${libro.imagen}"
          class="img-fluid rounded mx-auto d-block imagen"
          alt="imagen libro"
        />
    </div>
    </div>
  </div>`;
  detalle_libro.innerHTML = estructura_card;
});

document.addEventListener("click", function (event) {
  if (event.target.tagName == "A") {
    localStorage.clear();
  }
});
