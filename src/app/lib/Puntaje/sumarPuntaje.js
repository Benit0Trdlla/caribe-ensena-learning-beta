export const sumarPuntaje = () => {
    // Obtener el puntaje guardado o usar 0 si no existe
    const puntajeGuardado = parseFloat(localStorage.getItem('puntaje')) || 0;

    // Sumar 2.85 puntos
    const nuevoPuntaje = puntajeGuardado + 2.85;

    // Guardar el nuevo puntaje en localStorage
    localStorage.setItem('puntaje', nuevoPuntaje.toFixed(2));
}