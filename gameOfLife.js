var grid = [];

function main() {
  console.log("Hello");
  var m = prompt("Enter number of rows");
  var n = prompt("Enter number of columns");
  var t = prompt("Enter number of ticks");
  var rows = parseInt(m);
  var columns = parseInt(n);
  var ticks = parseInt(t);
  console.log("rows: ", rows);
  console.log("columns: ", columns);
  console.log("ticks: ", ticks);
  startGameOfLife(rows, columns, ticks);
}

function startGameOfLife(rows, columns, ticks) {
  initialiseGrid(rows, columns);
}

function initialiseGrid(rows, columns) {
  for (let index = 0; index < rows; index++) {
    var row = [];
    for (let index = 0; index < columns; index++) {
      var cell = Math.round(Math.random());
      row.push(cell);
    }
    grid.push(row);
  }
  console.log(grid);
}

main();
