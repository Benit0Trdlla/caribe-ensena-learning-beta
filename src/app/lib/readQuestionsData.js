// Leer el TOTAL de preguntas correctas e incorrectas
export const readQuestionsData = (cursoName, cursoLevel) => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};
        if (typeof previousAnswers === 'object' && previousAnswers[cursoLevel]) {
            const questionsData = previousAnswers[cursoLevel]['questionsData'];
            if (questionsData) {
                const correct = questionsData.mountCorrect || 0;
                const inCorrect = questionsData.mountIncorrect || 0;
                return { correct, inCorrect };
            }
        }
    }
    console.warn(`No data: ${cursoLevel}`);
    return { correct: 0, inCorrect: 0 }; // Valores predeterminados
};
