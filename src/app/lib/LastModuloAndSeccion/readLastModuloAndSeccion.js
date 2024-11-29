export const readLastModuloAndSeccion = (cursoName) => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        // Obtener las respuestas anteriores del localStorage
        const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};

        const lastModuloAndSeccionData = previousAnswers['LastModuloAndSeccion'] || {};

        const lastModuloAndSeccion = lastModuloAndSeccionData.moduloAndSeccion || 'Modulo-1/1';
        const lastModulo = lastModuloAndSeccionData.modulo || 'Modulo-1';


        return { lastModuloAndSeccion, lastModulo };
    }
    return { lastModuloAndSeccion: null, lastModulo: null };
};