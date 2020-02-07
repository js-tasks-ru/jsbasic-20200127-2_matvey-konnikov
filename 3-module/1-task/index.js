/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let string = data
    .filter(item => item.age <= age)
    .map((item,index,arr) => {
      if (index === arr.length-1){
        return `${item.name}, ${item.balance}`
      }
      return `${item.name}, ${item.balance}\n`
    })
    .join('')
    console.log(string)
    return string
  }
