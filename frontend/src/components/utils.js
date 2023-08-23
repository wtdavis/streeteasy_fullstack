export const handleChangeMargin = (num) => {
    document.getElementById("header").style.setProperty('--edgepadding', `${num}%`, "important")
}
