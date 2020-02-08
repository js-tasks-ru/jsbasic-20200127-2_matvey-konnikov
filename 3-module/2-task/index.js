/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let newStr = []
    let newStr1 = []

    newStr = str.split('')


    for (let item of newStr) {
        let a = ''

        if (isFinite(item) || item === '-' || item === '.') {
            a += item
        }

        newStr1.push(a)
    }
    newStr =[]
    let b = ''

    for (let item of newStr1) {

        if (item && item !== ' ') {
            b += item

            continue

        } else if (!b || b === ' ') {
            continue
        }

        newStr.push(+b)
        b = ''
    }
    newStr.push(+b)
    let c = Math.max(...newStr)
    let d = Math.min(...newStr)

    return { min: d, max: c }
}
