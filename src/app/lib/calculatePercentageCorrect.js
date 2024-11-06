export const calculatePercentageCorrect = (cursoName, cursoLevel, seccionNumber,) => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};
        if (previousAnswers[cursoLevel] && previousAnswers[cursoLevel][seccionNumber]) {
            const preguntas = Object.values(previousAnswers[cursoLevel][seccionNumber]);
            const totalPreguntas = preguntas.length - 1;
            const preguntasCorrectas = preguntas.filter(pregunta => pregunta.isCorrect).length;
            const porcentajeCorrectas = (preguntasCorrectas / totalPreguntas) * 100;
            return porcentajeCorrectas;
        }
    }
    return 0;
};