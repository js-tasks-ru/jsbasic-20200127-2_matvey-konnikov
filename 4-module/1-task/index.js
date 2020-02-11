/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
    let list = document.createElement('ul')

    list.innerHTML += friends
    .map(item => `<li>${item.firstName} ${item.lastName}</li>`)
    .join('')

    return list

}
