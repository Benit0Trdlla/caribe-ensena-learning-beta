export const updateSeccionCompleted = (cursoName, cursoLevel, seccionNumber, isCompleted) => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        // Obtener los datos previos del localStorage
        const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};

        // Verifica si existe el nivel
        if (!previousAnswers[cursoLevel]) {
            previousAnswers[cursoLevel] = {};
        }
        
        // Verifica si existe la sección antes de actualizar
        if (!previousAnswers[cursoLevel][seccionNumber]) {
            previousAnswers[cursoLevel][seccionNumber] = {};
        }

        // Actualizar el valor de seccionCompleted
        previousAnswers[cursoLevel][seccionNumber].seccionCompleted = isCompleted;

        // Guardar el objeto actualizado en el localStorage
        localStorage.setItem(`${cursoName}`, JSON.stringify(previousAnswers));
    }
};
