let errorsD = [];
function F31() {
    for (var i = 0; i < to_verify.length; i++) {
        if (!F21(to_verify[i])) {
            errorsD.push("Row " + (i + 1) + " is incorrect: " + to_verify[i].join(" "));
        }
    }
}

function F32() {
    for (var j = 0; j < to_verify[0].length; j++) {
        var column = [];
        for (var i = 0; i < to_verify.length; i++) {
            column.push(to_verify[i][j]);
        }
        if (!F21(column)) {
            errorsD.push("Column " + (j + 1) + " is incorrect: " + column.join(" "));
        }
    }
}

function F33() {
    for (var regionSudoku = 0; regionSudoku < 9; regionSudoku++) {
        var regionData = [];
        for (var i = Math.floor(regionSudoku / 3) * 3; i < Math.floor(regionSudoku / 3) * 3 + 3; i++) {
            for (var j = (regionSudoku % 3) * 3; j < (regionSudoku % 3) * 3 + 3; j++) {
                regionData.push(to_verify[i][j]);
            }
        }
        if (!F21(regionData)) {
            errorsD.push("Region " + (regionSudoku + 1) + " is incorrect: " + regionData.join(" "));
        }
    }
}

function displayError() {
    if(errorsD.length > 0) {
        var tabToFill = [];
        for(var i = 0; i < errorsD.length; i++) {
            var newTab = [];
            var firstSplit = errorsD[i].split(':');
            newTab.push(firstSplit[0] + ":")
            var secondSplit = firstSplit[1].split(' ');
            for(var d = 1; d < 10; d++) {
                newTab.push(secondSplit[d]);
            }
            tabToFill.push(newTab);
        }

        var table = "<table>";
        for (var i = 0; i < tabToFill.length; i++) {
            table = table + "<tr>";
            for (var j = 0; j < 10; j++) {
                table = table + "<td class=\"border\">" + tabToFill[i][j] + "</td>";
            }
            table = table + "</tr>";
        }
        table = table + "</table>";
        document.body.innerHTML = document.body.innerHTML + table;

        console.log(errorsD);
    } else {
        document.body.innerHTML = document.body.innerHTML + "<p>The table is correct.</p>";
    }
}
F31();
F32();
F33();
displayError();
