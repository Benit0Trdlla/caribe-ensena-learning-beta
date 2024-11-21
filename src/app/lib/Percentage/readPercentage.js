export const readPercentage = (cursoName) => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {

        const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};
        
        // Obtener los niveles existentes 
        const niveles = Object.keys(previousAnswers);

        // Obtener el porcentaje completado guardado en el localStorage de cada nivel
        const percentages = niveles.reduce((acc, nivel) => {
            acc[nivel] = previousAnswers[nivel].percentageCompleted || 0;
            return acc;
        }, {});

        const Modulo1 = percentages['Modulo-1'] || 0;
        const Modulo2 = percentages['Modulo-2'] || 0;
        const Modulo3 = percentages['Modulo-3'] || 0;
        const Modulo4 = percentages['Modulo-4'] || 0;

        return { Modulo1, Modulo2, Modulo3, Modulo4 };
    }
    return {Modulo1: 0, Modulo2: 0, Modulo3: 0, Modulo4: 0};
}