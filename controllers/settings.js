export const settings = () => {
    document.querySelector('settings').addEventListener('click', () => {
        const settingsMenu = document.querySelector('menu');
        settingsMenu.classList.toggle('show');
    });
}