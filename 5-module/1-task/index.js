/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
 
    for (let i = 1; i < table.rows.length; i++){
        if (table.rows[i].lastElementChild.dataset.available === 'true'){
            table.rows[i].classList.add('available')
        } else if(table.rows[i].lastElementChild.dataset.available === 'false'){
            table.rows[i].classList.add('unavailable')
        } else{
            table.rows[i].setAttribute('hidden', '')
        }
        if (table.rows[i].lastElementChild.previousElementSibling.textContent === 'm'){
            table.rows[i].classList.add('male')
        } else{
            table.rows[i].classList.add('female')
        }
        if (+table.rows[i].firstElementChild.nextElementSibling.textContent < 18){
            table.rows[i].style.textDecoration = 'line-through'
        }
    }
    
}
