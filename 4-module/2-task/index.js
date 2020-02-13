/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    let td = table.getElementsByTagName('td')
    for (let i = 0; i < td.length; i+=6){
        td[i].style.backgroundColor = "red"
    }
}
