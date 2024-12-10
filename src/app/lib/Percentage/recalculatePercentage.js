export const recalculatePercentage = (cursoName, cursoLevel, seccionNumber) => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};
        if (typeof previousAnswers === 'object' && previousAnswers[cursoLevel]) {
            const percentageCompleted = previousAnswers[cursoLevel].percentageCompleted;

            // Calcular la cantidad de preguntas respondidas
            const preguntasRespondidas = Object.keys(previousAnswers[cursoLevel][seccionNumber])
                .filter(key => key !== 'seccionCompleted' && key !== 'percentageCompleted').length;

            // Calcular el porcentaje de preguntas respondidas
            const percentageCompletedSeccion = ((preguntasRespondidas / TotalPreguntasSheets) * 100).toFixed(0);

            // Calcular el nuevo porcentaje
            const newPercentage = percentageCompleted - percentageCompletedSeccion;

            // Actualizar el porcentaje
            previousAnswers[cursoLevel].percentageCompleted = newPercentage;

            localStorage.setItem(`${cursoName}`, JSON.stringify(previousAnswers));
        }
    }
}