export const savePuntaje = () => {
    if (!localStorage.getItem('puntaje')) {
        localStorage.setItem('puntaje', 0);
    }
}