const snakify = (inputString) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    let string = inputString.split("")
    let new_str = ''
    for (let i=0; i<inputString.length; i++) {
        if (string[i] === string[i].toUpperCase() && alphabet.includes(string[i].toLowerCase()) && alphabet.includes(string[i -1].toLowerCase())) {
           new_str = new_str.concat(`_${string[i].toLowerCase()}`)
        } else {
            new_str = new_str.concat(string[i])
        }
    }
    return new_str
}
export default snakify