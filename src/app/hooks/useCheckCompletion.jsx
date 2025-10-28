import { useMemo } from "react";

export function useCheckCompletion({ modulo = 100, seccionCompleted, numInt }) {
    const CheckCompletion = useMemo(() => {
        if (modulo !== null && modulo < 100) {
            return {
                message: `El Modulo anterior no fue completado TEST`,
                isCompleted: false
            };
        }

        if (!seccionCompleted && numInt !== 1) {
            return {
                message: `La Seccion ${numInt - 1} no fue completada EST`,
                isCompleted: false
            };
        }

        return {
            isCompleted: true
        };
    }, [modulo, seccionCompleted, numInt]);
    return CheckCompletion;
}
