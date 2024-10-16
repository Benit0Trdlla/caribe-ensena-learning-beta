'use client';
import { usePathname } from 'next/navigation'

export const usePathData = () => {
    const pathname = usePathname()
    const cursoName = pathname.split('/')[1];
    const cursoLevel = pathname.split('/')[2];
    return { cursoName, cursoLevel }
}