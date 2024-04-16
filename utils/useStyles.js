export const useStyles = (styleElement) => {
    let styles = document.querySelectorAll('style');

    for(let i=0; i<styles.length; i++) {
        styles[0].remove();
    }

    styleElement();
}