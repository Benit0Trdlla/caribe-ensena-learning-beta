// Calcula el porcentaje de preguntas correctas de una sección en específica.

export const calculatePercentageCorrect = (cursoName, cursoLevel, seccionNumber,) => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        // Obtener los datos previos del localStorage
        const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};

        // Verificar si existen los niveles y las secciones antes de acceder    
        if (previousAnswers[cursoLevel] && previousAnswers[cursoLevel][seccionNumber]) {

            const preguntas = Object.values(previousAnswers[cursoLevel][seccionNumber]);
            
            // Restar 1 al total, porque queda seccion tiene 'seccionCompleted'
            const totalPreguntas = preguntas.length - 1;
            
            // Filtrar las preguntas correctas
            const preguntasCorrectas = preguntas.filter(pregunta => pregunta.isCorrect).length;
            // Calcular el porcentaje de preguntas correctas
            const porcentajeCorrectas = (preguntasCorrectas / totalPreguntas) * 100;

            return porcentajeCorrectas;
        }
    }
    // Retornar 0 si no se encontraron datos o no se pudo calcular el porcentaje
    return 0;
};