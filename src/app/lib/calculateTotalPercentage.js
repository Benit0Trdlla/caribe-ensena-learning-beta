export const calculateTotalPercentage = (previousAnswers, cursoLevel) => {
    // Definir las secciones
    const secciones = ['Seccion-1', 'Seccion-2', 'Seccion-3', 'Seccion-4', 'Seccion-5', 'Seccion-6', 'Seccion-7'];

    // Calcular la cantidad total de preguntas respondidas
    const totalPreguntasRespondidas = secciones.reduce((total, seccion) => {
        const seccionData = previousAnswers[cursoLevel][seccion] || {};
        const preguntasRespondidas = Object.keys(seccionData)
            .filter(key => key !== 'seccionCompleted' && key !== 'percentageCompleted').length;
        return total + preguntasRespondidas;
    }, 0);

    // Calcular el total de preguntas (sumar las preguntas de todas las secciones)
    const totalPreguntas = 5 * secciones.length;

    // Calcular el porcentaje total
    const percentageCompleted = ((totalPreguntasRespondidas / totalPreguntas) * 100).toFixed(0);

    // Guardar el porcentaje completado
    previousAnswers[cursoLevel].percentageCompleted = percentageCompleted;
}