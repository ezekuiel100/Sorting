const container = document.querySelector(".container");
const barra = [15, 7, 1, 2, 6, 9, 10, 4, 6, 9, 10, 3, 5];

function Barras(index = 0) {
  container.innerHTML = "";

  barra.map((altura, i) => {
    const div = document.createElement("div");
    div.style.width = "20px"; // Defina a largura desejada para as divs
    div.style.height = altura * 20 + "px"; // Defina uma escala para a altura
    div.style.backgroundColor = "black";
    container.appendChild(div); // Adiciona as divs ao corpo do documento

    if (index === i) {
      div.style.background = "red";
    }
  });
}
Barras();

function sorting(index) {
  setTimeout(() => {
    if (index < barra.length) {
      for (let i = index + 1; i < barra.length; i++) {
        if (barra[i] < barra[index]) {
          [barra[index], barra[i]] = [barra[i], barra[index]]; // Troca os elementos

          Barras(index);
        }
      }

      sorting(index + 1);
    }
  }, 500);
}

sorting(0);
