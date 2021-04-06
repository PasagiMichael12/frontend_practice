const infoTable = document.querySelector('#infoTable');
const numOfCells = infoTable.rows[0].cells;

//#1
const row = infoTable.insertRow(0);
row.insertCell(0).innerHTML = '6';
row.insertCell(1).innerHTML = 'Sean ';
row.insertCell(2).innerHTML = 'Reyes';
row.insertCell(3).innerHTML = '@sreyes';
infoTable.lastElementChild.appendChild(row);

//#2
const getAllTd = document.querySelectorAll('td');
const changeHandleValue = (name, findVal) => {
    Object.keys(getAllTd).map(value => getAllTd[value].innerText === findVal ? getAllTd[value].innerText = name : false);
}
//changeHandleValue("@dixonl", "@ldixon");

//#3
const swapRow = (firstRow, secondRow) => {
    const firstValues = infoTable.rows[firstRow].innerHTML;
    const secondValues = infoTable.rows[secondRow].innerHTML;

    infoTable.rows[secondRow].innerHTML = firstValues;
    infoTable.rows[firstRow].innerHTML = secondValues;

    infoTable.rows[firstRow].firstElementChild.innerText = firstRow;
    infoTable.rows[secondRow].firstElementChild.innerText = secondRow;
}
//swapRow(1,4);
//#4
const swapColumns = (table, swapCol1, swapCol2) => {

    if (swapCol1 != swapCol2) {
        for (let i = 0; i < table.rows.length; i++) {
            const row = table.rows[i];
            const firstCell = row.cells[swapCol1];
            const secondCell = row.cells[swapCol2];
            const siblingCell = row.cells[swapCol1 + 1];

            row.insertBefore(firstCell, secondCell);
            row.insertBefore(secondCell, siblingCell);
        }
    }
}
swapColumns(infoTable, 1, 3);

//#5
// Done by having table table-striped on its class




