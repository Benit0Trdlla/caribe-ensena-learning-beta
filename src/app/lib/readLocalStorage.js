export const readLocalStorage = (cursoName, cursoLevel, seccionNumber, numIndex) => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        // Obtener las respuestas anteriores del localStorage
        const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};

        // Verificar si existen los niveles y las secciones antes de acceder
        const cursoData = previousAnswers[cursoLevel] || {};
        const seccionData = cursoData[seccionNumber] || {};

        // Obtener la respuesta del usuario para el numIndex
        const userResponse = seccionData[numIndex] || {};

        // Verificar si la sección está completada
        const seccionCompleted = seccionData.seccionCompleted !== undefined ? seccionData.seccionCompleted : false;

        // Datos de la respuesta guardada en localStorage
        const respuestaUser = userResponse.respuestaUser || null;
        const respuestaCorrecta = userResponse.respuestaCorrecta || null;
        const isCorrect = userResponse.isCorrect || null;

        return { respuestaUser, respuestaCorrecta, isCorrect, seccionCompleted }
    }
    return { respuestaUser: null, respuestaCorrecta: null, isCorrect: null, seccionCompleted: false };
}