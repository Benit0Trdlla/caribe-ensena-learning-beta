'use client'
import { usePathData } from './usePathData';
import { readPercentage } from '../lib';

export const useModuloStatus = () => {
    const { cursoName, cursoLevel } = usePathData()

    const cursoAnterior = parseInt(cursoLevel.split('-')[1] - 1)
    const cursoToQuery = `Modulo${cursoAnterior}`

    // Consultar el porcentaje de un modulo en especifico, cursoToQuery tiene el modulo a consultar
    const modulo = readPercentage(cursoName)[cursoToQuery]

    return modulo 
}