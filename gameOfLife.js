var grid1 = [];
var grid2 = [];
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
  console.log("Initial Grid");
  displayGrid(grid1);
  for (let index = 0; index < ticks; index++) {
    var tickNumber = index + 1;
    console.log("Tick number: ", tickNumber);
    console.log("grid 1: ", grid1);
    console.log("grid 2: ", grid2);
    manipulateGrid(grid1);
    displayGrid(grid2);
  }
}

function initialiseGrid(rows, columns) {
  for (let index = 0; index < rows; index++) {
    var row = [];
    for (let index = 0; index < columns; index++) {
      var cell = Math.round(Math.random());
      row.push(cell);
    }
    grid1.push(row);
  }
  grid2 = grid1;
}

function displayGrid(grid) {
  console.log(grid);
}

function manipulateGrid(grid) {
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    var row = grid[rowIndex];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      var cell = row[columnIndex];
      if (isLive(cell)) {
        var aliveNeighbours = getAliveNeighbours(grid, rowIndex, columnIndex);
        if (aliveNeighbours == 2 || aliveNeighbours == 3) {
        } else {
          grid2[rowIndex][columnIndex] = 0;
        }
      } else {
        var aliveNeighbours = getAliveNeighbours(grid, rowIndex, columnIndex);
        if (aliveNeighbours == 3) {
          grid2[rowIndex][columnIndex] = 1;
        }
      }
    }
  }
  grid1 = grid2;
}

function isLive(cell) {
  return cell == 1;
}

function getAliveNeighbours(grid, rowIndex, columnIndex) {
  var alive = 0;
  var neighbours = [];

  if (rowIndex - 1 >= 0) {
    if (columnIndex + 1 < grid[0].length) {
      neighbours.push(grid[rowIndex - 1][columnIndex + 1]);
    }
    if (columnIndex - 1 >= 0) {
      neighbours.push(grid[rowIndex - 1][columnIndex - 1]);
    }
    neighbours.push(grid[rowIndex - 1][columnIndex]);
  }
  if (rowIndex + 1 < grid.length) {
    if (columnIndex + 1 < grid[0].length) {
      neighbours.push(grid[rowIndex + 1][columnIndex + 1]);
    }
    if (columnIndex - 1 >= 0) {
      neighbours.push(grid[rowIndex + 1][columnIndex - 1]);
    }
    neighbours.push(grid[rowIndex + 1][columnIndex]);
  }
  if (columnIndex + 1 < grid[0].length) {
    neighbours.push(grid[rowIndex][columnIndex + 1]);
  }
  if (columnIndex - 1 >= 0) {
    neighbours.push(grid[rowIndex][columnIndex - 1]);
  }

  neighbours.forEach((cell) => {
    if (cell == 1) {
      alive += 1;
    }
  });
  return alive;
}

main();
