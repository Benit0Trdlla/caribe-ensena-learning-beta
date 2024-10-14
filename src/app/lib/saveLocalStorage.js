export const saveLocalStorage = (cursoName, numIndex, correctAnswer, selectedValue, cursoLevel, seccionNumber) => {
    // Obtener las respuestas anteriores del localStorage
    const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};

    // Verificar si el nivel del curso existe, sino crearlo
    if (!previousAnswers[cursoLevel]) {
        previousAnswers[cursoLevel] = {};
    }
    
    // Verificar si la sección del curso existe, sino crearla
    if (!previousAnswers[cursoLevel][seccionNumber]) {
        previousAnswers[cursoLevel][seccionNumber] = {
            seccionCompleted: false, // Inicialmente la sección no está completada
        };
    }

    // Verificar si el índice de pregunta dentro de la sección existe, sino crearlo
    if (!previousAnswers[cursoLevel][seccionNumber][numIndex]) {
        previousAnswers[cursoLevel][seccionNumber][numIndex] = {};
    }

    // Guardar la respuesta del usuario
    previousAnswers[cursoLevel][seccionNumber][numIndex] = {
        respuestaUser: selectedValue,
        respuestaCorrecta: correctAnswer,
        isCorrect: selectedValue === correctAnswer ? true : false,
    };

    localStorage.setItem(`${cursoName}`, JSON.stringify(previousAnswers));
}