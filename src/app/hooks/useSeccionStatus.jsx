'use client'
import { usePathData } from './usePathData';
import { isSeccionCompleted } from '../lib';

export const useSeccionStatus = (numInt) => {
    if (numInt === 1) return 

    const { cursoName, cursoLevel } = usePathData();

    const seccionToQuery = `Seccion${numInt === 1 ? numInt : numInt - 1}`
    // console.log('seccionToQuery', seccionToQuery);

    const seccionCompleted = isSeccionCompleted(cursoName, cursoLevel)[seccionToQuery];
    // console.log('seccionCompleted', seccionCompleted);

    return seccionCompleted
}