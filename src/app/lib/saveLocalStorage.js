export const saveLocalStorage = (cursoName, cursoLevel, seccionNumber, numIndex, correctAnswer, selectedValue, totalPreguntas) => {
    // Obtener las respuestas anteriores del localStorage
    const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};

    // Verificar si el nivel del curso existe, sino crearlo
    if (!previousAnswers[cursoLevel]) {
        previousAnswers[cursoLevel] = {
            levelCompleted: false, // Inicialmente el nivel no está completado
        };
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

    // Calcular la cantidad de preguntas respondidas
    const preguntasRespondidas = Object.keys(previousAnswers[cursoLevel][seccionNumber])
        .filter(key => key !== 'seccionCompleted' && key !== 'percentageCompleted').length;

    // Calcular el porcentaje de preguntas respondidas
    const percentageCompleted = (preguntasRespondidas / totalPreguntas) * 100;

    // Guardar el porcentaje completado
    previousAnswers[cursoLevel].percentageCompleted = percentageCompleted;

    localStorage.setItem(`${cursoName}`, JSON.stringify(previousAnswers));
}