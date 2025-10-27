import { useMemo } from "react";

export function useCheckCompletion({ modulo, seccionCompleted, numInt }) {
    const mensaje = useMemo(() => {
        if (modulo < 100) {
            return `El Módulo 1 no fue completado`;
        }

        if (!seccionCompleted && numInt !== 1) {
            return `La Sección ${numInt - 1} no fue completada`;
        }

        return null;
    }, [modulo, seccionCompleted, numInt]);

    return mensaje;
}
