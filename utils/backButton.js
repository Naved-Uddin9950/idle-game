export const back = (button, previousPage) => {
    button.addEventListener('click', () => {
        previousPage();
    })
}