var to_verify = new Array(9);


for (var i = 0; i < 9; i++) {

    to_verify[i] = new Array(9);

}


function F11() {
    for (var i = 0; i < to_verify.length; i++) {
        var fill_up = array_number[i].split(' ');
        for (var j = 0; j < fill_up.length; j++) {

            to_verify[i][j] = parseInt(fill_up[j]);

        }
    }
}


function F12() {
    var sudoku_grid = "<table>";
    for (var i = 0; i < 9; i++) {

        sudoku_grid = sudoku_grid + "</tr>";
        
        for (var j = 0; j < 9; j++) {

            sudoku_grid = sudoku_grid + "<td class=\"border p-2\">" + to_verify[i][j] + "</td>";
        }
        sudoku_grid = sudoku_grid + "</tr>";
    }
    sudoku_grid += "</table>";
    document.body.innerHTML += sudoku_grid;
}
F11();
F12();