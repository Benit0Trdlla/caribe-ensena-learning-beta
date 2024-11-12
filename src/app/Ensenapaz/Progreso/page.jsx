'use client'
import { ProgressBar } from '@/app/components/Progreso/ProgressBar';
import { readPercentage } from "@/app/lib/readPercentage";

export default function ProgresoEnsenapazPage() {
    const { Modulo1, Modulo2, Modulo3, Modulo4 } = readPercentage('Ensenapaz');

    const ModuloData = [
        { number: 'Modulo 1', percentage: Modulo1 },
        { number: 'Modulo 2', percentage: Modulo2 },
        { number: 'Modulo 3', percentage: Modulo3 },
        { number: 'Modulo 4', percentage: Modulo4 },
    ];

    return (
        <>
            <h1 className='text-center mt-3'>Este el progreso del curso Ensenapaz</h1>
            <div className='container'>
                {ModuloData.map((modulo) => (
                    <div className='mb-5 mt-4 mt-md-3' key={modulo.number}>
                        <div className='d-flex justify-content-between align-items-center mb-3'>
                            <p className="m-0">{modulo.number}</p>
                            <button className='btn btn-primary btn-sm'>Más información</button>
                        </div>
                        <ProgressBar moduloPercentage={modulo.percentage} />
                    </div>
                ))}
            </div>
        </>
    )
}
