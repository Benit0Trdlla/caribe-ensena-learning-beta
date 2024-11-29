export const setLastModuloAndSeccion = (cursoName, cursoLevel, seccionNumber) => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};

        // Si no existe el objeto 'LastModuloAndSeccion' lo crea con el valor por defecto
        if (!previousAnswers['LastModuloAndSeccion']) {
            previousAnswers['LastModuloAndSeccion'] = {
                moduloAndSeccion: "Modulo-1/1",
                modulo: "Modulo-1",
            };
        }

        // Guardar en que sección y nivel se quedo el usuario
        previousAnswers['LastModuloAndSeccion'].moduloAndSeccion = `/${cursoLevel.concat('/').concat(seccionNumber + 1)}`;
        previousAnswers['LastModuloAndSeccion'].modulo = `/${cursoLevel}`;


        localStorage.setItem(`${cursoName}`, JSON.stringify(previousAnswers));
    }
}