import { useMemo } from "react";

export function useCheckCompletion({ modulo = null, seccionCompleted, numInt }) {
    const CheckCompletion = useMemo(() => {
        if (modulo !== null && modulo < 100) {
            return {
                message: `El Modulo anterior no fue completado`,
                isCompleted: false
            };
        }

        if (!seccionCompleted && numInt !== 1) {
            return {
                message: `La Seccion ${numInt - 1} no fue completada`,
                isCompleted: false
            };
        }

        return {
            isCompleted: true
        };
    }, [modulo, seccionCompleted, numInt]);
    return CheckCompletion;
}
