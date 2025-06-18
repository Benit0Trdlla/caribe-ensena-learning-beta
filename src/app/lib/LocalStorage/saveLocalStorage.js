import { calculateTotalPercentage, savePuntaje, sumarPuntaje } from '@/app/lib';

export const saveLocalStorage = (cursoName, cursoLevel, seccionNumber, numIndex, correctAnswer, selectedValue) => {
    savePuntaje();

    // Obtener las respuestas anteriores del localStorage
    const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};

    // Verificar si el nivel del curso existe, sino crearlo
    if (!previousAnswers[cursoLevel]) {
        previousAnswers[cursoLevel] = {
            // levelCompleted: false, // Inicialmente el nivel no está completado
            // lastSeccion: 1,
            'questionsData': {
                mountCorrect: 0, // Contador de preguntas correctas
                mountIncorrect: 0 // Contador de preguntas incorrectas
            },
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

    // Verificar si el nivel y 'questionsData' existen antes de actualizar
    if (previousAnswers[cursoLevel] && previousAnswers[cursoLevel]['questionsData']) {
        // Actualizar los contadores de preguntas correctas e incorrectas
        if (selectedValue === correctAnswer) {
            previousAnswers[cursoLevel]['questionsData'].mountCorrect++;
            sumarPuntaje();
        } else {
            previousAnswers[cursoLevel]['questionsData'].mountIncorrect++;
        }
    }

    calculateTotalPercentage(previousAnswers, cursoLevel);

    localStorage.setItem(`${cursoName}`, JSON.stringify(previousAnswers));
}