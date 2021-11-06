function makeGrill() {
  const container = document.querySelector('.container')
  const div = document.createElement('div');
  div.style.border = '1px solid black';
  div.style.width = '60px';
  div.style.height = '60px';
  div.onmouseover = function() {
    this.style.backgroundColor = "#ccc";
  }
  let contenedor = container.appendChild(div)
  return contenedor;
}

let numeroCuadrados = +prompt('Cuantos cuadrados deseas?')


for (let i = 0; i < numeroCuadrados; i++) {
  makeGrill()
  for (let j = 0; j < numeroCuadrados; j++)
  {    
    document.write('<div>') + document.write("</div>");

    makeGrill()
  }
}

// maxRow = 10;
// maxColumn = 100;

// for(let i = 0; i < maxRow; i++) {
//   for (let j = 0; j < maxColumn; j++) {
//     makeGrill() + "</br>"
//     // document.write("RowNum: " + i + " " + "ColNum: " + j + "</br>");
//   }
// }

// EJEMPLO DE COMO IMPRIMER LAS FILAS Y LAS COLUMNAS EL FOR:
// var rows=20;
// var cols=10;

// document.write("<table>");
//   for (i=0; i<rows; i++) {
//     document.write("<tr>");
//       for (j=0; j<cols; j++) {
//         document.write("<td>col"+j+"</td>");
//       }
//     document.write("</tr>");
//   }
// document.write("</table>");