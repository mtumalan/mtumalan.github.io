// Obtén una referencia al elemento <p> con el id "mousePosition"
const mousePositionElement = document.getElementById("mousePosition");

// Agrega un listener al evento "mousemove" en el documento
document.addEventListener("mousemove", (event) => {
  // Actualiza el contenido del elemento con la posición del mouse
  mousePositionElement.textContent = `Posición del mouse: ${event.clientX}, ${event.clientY}`;
});

// Obtén una referencia al formulario y los elementos de las cajas de texto
const form = document.getElementById("form1");
const fnameInput = document.getElementById("form-fname");
const lnameInput = document.getElementById("form-lname");

// Agrega un listener al evento "submit" del formulario
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que el formulario se envíe

  // Obtiene el valor de las cajas de texto
  const fname = fnameInput.value;
  const lname = lnameInput.value;

  // Crea un nuevo elemento <p> con el nombre completo
  const fullNameElement = document.createElement("p");
  fullNameElement.textContent = `Nombre completo: ${fname} ${lname}`;

  // Inserta el elemento después del botón de envío
  const submitButton = document.getElementById("form1-submit");
  submitButton.insertAdjacentElement("afterend", fullNameElement);
});

// Obtén una referencia a la tabla y los botones
const table = document.getElementById("sampleTable");
const insertRowButton = document.getElementById("btn-insert-r");
const insertColumnButton = document.getElementById("btn-insert-c");

// Agrega un listener al botón "Insert row"
insertRowButton.addEventListener("click", () => {
  // Crea una nueva fila
  const newRow = table.insertRow();

  // Crea dos nuevas celdas y las agrega a la fila
  const cell1 = newRow.insertCell();
  const cell2 = newRow.insertCell();

  // Establece el contenido de las celdas
  cell1.textContent = "New row column 1";
  cell2.textContent = "New row column 2";
});

// Agrega un listener al botón "Insert column"
insertColumnButton.addEventListener("click", () => {
  // Recorre cada fila existente en la tabla
  const rows = table.rows;
  for (let i = 0; i < rows.length; i++) {
    // Crea una nueva celda y la agrega a la fila actual
    const cell = rows[i].insertCell();

    // Establece el contenido de la celda
    cell.textContent = `New column ${i + 1}`;
  }
});

// Obtén una referencia a la tabla y los elementos de entrada
const table2 = document.getElementById("myTable");
const rowIndexInput = document.getElementById("rowIndex");
const colIndexInput = document.getElementById("colIndex");
const newValueInput = document.getElementById("newValue");
const changeButton = document.getElementById("btn-change");

// Agrega un listener al botón "Change content"
changeButton.addEventListener("click", () => {
  // Obtén los valores de fila, columna y nuevo valor
  const rowIndex = parseInt(rowIndexInput.value) - 1; // Restamos 1 para ajustar el índice
  const colIndex = parseInt(colIndexInput.value) - 1; // Restamos 1 para ajustar el índice
  const newValue = newValueInput.value;

  // Verifica si los valores de fila y columna son válidos
  if (
    rowIndex >= 0 &&
    rowIndex < table2.rows.length &&
    colIndex >= 0 &&
    colIndex < table2.rows[rowIndex].cells.length
  ) {
    // Actualiza el contenido de la celda seleccionada
    table2.rows[rowIndex].cells[colIndex].textContent = newValue;
  } else {
    console.log("Posición inválida");
  }
});

// Obtén una referencia al select y los botones
const colorSelect = document.getElementById("colorSelect");
const addColorButton = document.getElementById("btn-add-color");
const removeColorButton = document.getElementById("btn-rmv-color");

// Agrega un listener al botón "Add color"
addColorButton.addEventListener("click", () => {
  // Genera un color aleatorio
  const colors = ["Red", "Green", "White", "Black"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Crea un nuevo elemento de opción y lo agrega al select
  const newOption = document.createElement("option");
  newOption.textContent = randomColor;
  colorSelect.appendChild(newOption);
});

// Agrega un listener al botón "Remove color"
removeColorButton.addEventListener("click", () => {
  // Verifica si hay al menos una opción seleccionada
  if (colorSelect.options.length > 0) {
    // Remueve la última opción del select
    colorSelect.remove(colorSelect.options.length - 1);
  }
});

// Obtén una referencia a la imagen
const image = document.getElementById("imagenGato");

// Agrega un listener al evento "mouseenter" de la imagen
image.addEventListener("mouseenter", () => {
  // Genera dos números aleatorios entre 300 y 600
  const randomWidth = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
  const randomHeight = Math.floor(Math.random() * (600 - 300 + 1)) + 300;

  // Crea una nueva imagen con el tamaño aleatorio
  const newImage = document.createElement("img");
  newImage.src = `http://placekitten.com/${randomWidth}/${randomHeight}`;

  // Reemplaza la imagen de placeholder por la nueva imagen
  image.parentNode.replaceChild(newImage, image);
});
