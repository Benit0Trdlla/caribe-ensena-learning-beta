export const readLastModuloAndSeccion = (cursoName) => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        // Obtener las respuestas anteriores del localStorage
        const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};
    }
    return { };
};