/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
    let arr = users
        .map(user => user.name)
    return arr
}
