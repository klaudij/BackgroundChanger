function changeColor (getColor) {
    let bg = document.querySelector('.bG');
    let selectColor = getColor.value;
    let text = getColor.options[getColor.selectedIndex].text;
    bg.style.background = selectColor ;

    bg.innerHTML = text;
}