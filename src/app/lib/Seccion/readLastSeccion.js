export const readLastSeccion = (cursoName) => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        // Obtener las respuestas anteriores del localStorage
        const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};

        // Obtener los niveles existentes 
        const niveles = Object.keys(previousAnswers);

        // Obtener el numero de la seccion donde se quedo el usuario
        const NumberSeccion = niveles.reduce((acc, nivel) => {
            acc[nivel] = previousAnswers[nivel].lastSeccion || 0;
            return acc;
        }, {});

        const NumberSeccionModulo1 = NumberSeccion['Modulo-1'] || 0;
        const NumberSeccionModulo2 = NumberSeccion['Modulo-2'] || 0;
        const NumberSeccionModulo3 = NumberSeccion['Modulo-3'] || 0;
        const NumberSeccionModulo4 = NumberSeccion['Modulo-4'] || 0;

        return { NumberSeccionModulo1, NumberSeccionModulo2, NumberSeccionModulo3, NumberSeccionModulo4 };
    }
    return { NumberSeccionModulo1: 0, NumberSeccionModulo2: 0, NumberSeccionModulo3: 0, NumberSeccionModulo4: 0 };
};