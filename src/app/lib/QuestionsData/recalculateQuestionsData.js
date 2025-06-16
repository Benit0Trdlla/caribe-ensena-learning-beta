import { recalculatePercentage, DeleteSeccion } from '@/app/lib';
import { recalculatePuntaje } from '../recalculatePuntaje';

export const recalculateQuestionsData = (cursoName, cursoLevel, seccionNumber) => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};

        if (typeof previousAnswers === 'object' && previousAnswers[cursoLevel] && previousAnswers[cursoLevel][seccionNumber]) {
            const preguntas = Object.values(previousAnswers[cursoLevel][seccionNumber]);

            const totalPreguntasSaved = preguntas.length - 1;
            const preguntasCorrectas = preguntas.filter(pregunta => pregunta.isCorrect).length;
            const preguntasIncorrectas = totalPreguntasSaved - preguntasCorrectas;

            const { mountCorrect = 0, mountIncorrect = 0 } = previousAnswers[cursoLevel].questionsData || {};

            // Actualizar los contadores en base a los cambios de esta sección
            const updatedCorrect = mountCorrect - preguntasCorrectas; // Resta las correctas de la sección
            const updatedIncorrect = mountIncorrect - preguntasIncorrectas; // Resta las incorrectas de la sección

            //Actulizar el puntaje guardado
            recalculatePuntaje(preguntasCorrectas);

            // Evitar valores negativos
            previousAnswers[cursoLevel].questionsData = {
                mountCorrect: Math.max(0, updatedCorrect),
                mountIncorrect: Math.max(0, updatedIncorrect)
            };

            localStorage.setItem(`${cursoName}`, JSON.stringify(previousAnswers));

            // Recalcular el porcentaje
            recalculatePercentage(cursoName, cursoLevel, seccionNumber)

            // Luego de actualizar los contadores, elimina la sección
            DeleteSeccion(cursoName, cursoLevel, seccionNumber);
        }
    }
}