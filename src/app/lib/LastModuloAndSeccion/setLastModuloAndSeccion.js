export const setLastModuloAndSeccion = (cursoName, cursoLevel, seccionNumber) => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};

        // Guardar en que sección y nivel se quedo el usuario
        previousAnswers['LastModuloAndSeccion'] = {
            moduloAndSeccion: `/${cursoLevel.concat('/').concat(seccionNumber + 1)}`,
        }

        localStorage.setItem(`${cursoName}`, JSON.stringify(previousAnswers));
    }
}