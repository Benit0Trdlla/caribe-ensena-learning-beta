export const isSeccionCompleted = (cursoName, cursoLevel) => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        // Obtener los datos previos del localStorage
        const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};

        // Verifica si existe el nivel
        if (!previousAnswers[cursoLevel]) {
            previousAnswers[cursoLevel] = {};
        }

        // Obtener las secciones existentes
        // const secciones = Object.keys(previousAnswers[cursoLevel]).filter(seccion => seccion !== 'levelCompleted' && seccion !== 'percentageCompleted');
        const secciones = ['Seccion-1', 'Seccion-2', 'Seccion-3', 'Seccion-4', 'Seccion-5', 'Seccion-6', 'Seccion-7'];

        // Obtener el estado 'seccionCompleted' de cada sección o 'false' si la sección no existe
        const seccionesCompleted = secciones.reduce((acc, seccion) => {
            acc[seccion] = previousAnswers[cursoLevel][seccion]?.seccionCompleted || false;
            return acc;
        }, {});

        const Seccion1 = seccionesCompleted['Seccion-1'];
        const Seccion2 = seccionesCompleted['Seccion-2'];
        const Seccion3 = seccionesCompleted['Seccion-3'];
        const Seccion4 = seccionesCompleted['Seccion-4'];
        const Seccion5 = seccionesCompleted['Seccion-5'];
        const Seccion6 = seccionesCompleted['Seccion-6'];
        const Seccion7 = seccionesCompleted['Seccion-7'];

        return { Seccion1, Seccion2, Seccion3, Seccion4, Seccion5, Seccion6, Seccion7 };
    }
    return { Seccion1: false, Seccion2: false, Seccion3: false, Seccion4: false, Seccion5: false, Seccion6: false, Seccion7: false };
}