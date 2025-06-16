export const recalculatePuntaje = (preguntasCorrectas) => {
    const puntajeSaved = parseFloat(localStorage.getItem('puntaje')) || 0;

    //Actulizar el puntaje guardado
    const updatedPuntaje = preguntasCorrectas * 2.85;
    localStorage.setItem('puntaje', Math.max(0, puntajeSaved - updatedPuntaje).toFixed(2));
}