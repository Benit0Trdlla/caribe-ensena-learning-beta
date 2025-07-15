'use client';
import { useParams } from 'next/navigation';

export const useSelectedQuestions = (data) => {
    // Obtener el numero de la seccion desde la URL
    const params = useParams()
    const number = parseInt(params.number);

    // Seleccionar las 5 preguntas correspondientes para cada seccion
    const startIndex = (number - 1) * 5;
    const endIndex = startIndex + 5;
    const selectedQuestions = data.slice(startIndex, endIndex);

    return { selectedQuestions };
};