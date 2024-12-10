export const DeleteSeccion = (cursoName, cursoLevel, seccionNumber) => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};
        if (typeof previousAnswers === 'object' && previousAnswers[cursoLevel] && previousAnswers[cursoLevel][seccionNumber]) {
            delete previousAnswers[cursoLevel][seccionNumber];
            if (!previousAnswers[cursoLevel][seccionNumber]) {
                localStorage.setItem(`${cursoName}`, JSON.stringify(previousAnswers));
            }
        }
    }
};