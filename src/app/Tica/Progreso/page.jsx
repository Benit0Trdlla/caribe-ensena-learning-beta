'use client'
import { ProgressBar, Modal } from '@/app/components/Progreso';
import { readPercentage, readQuestionsData } from "@/app/lib";
import { useState } from 'react';

export default function ProgresoTicaPage() {
    const [selectedModulo, setSelectedModulo] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [inCorrect, setInCorrect] = useState(0);
    const [correct, setCorrect] = useState(0);

    const openModal = (modulo) => {
        setSelectedModulo(modulo);
        setShowModal(true);

        const { correct, inCorrect } = readQuestionsData('Tica', modulo.number);
        setInCorrect(inCorrect);
        setCorrect(correct);
    }

    const { Modulo1, Modulo2, Modulo3, Modulo4 } = readPercentage('Tica');

    const ModuloData = [
        { number: 'Modulo-1', percentage: Modulo1, totalQuestions: 35 },
        { number: 'Modulo-2', percentage: Modulo2, totalQuestions: 35 },
        { number: 'Modulo-3', percentage: Modulo3, totalQuestions: 35 },
        { number: 'Modulo-4', percentage: Modulo4, totalQuestions: 35 },
    ];

    return (
        <>
            <h1 className='text-center mt-3'>Este el progreso del curso Tica</h1>
            <div className='container'>
                {ModuloData.map((modulo) => (
                    <div className='mb-5 mt-4 mt-md-3' key={modulo.number}>
                        <div className='d-flex justify-content-between align-items-center mb-3'>
                            <p className="m-0">{modulo.number}</p>
                            <button className='btn btn-primary btn-sm' onClick={() => openModal(modulo)}>Más información</button>
                        </div>
                        <ProgressBar moduloPercentage={modulo.percentage} />
                    </div>
                ))}
                {/* Modal de cada modulo, separado, para que tenga la información específica del módulo que corresponde*/}
                {showModal && (
                    <Modal
                        moduloPercentage={selectedModulo?.percentage}
                        showInfo={showModal}
                        onClose={() => setShowModal(false)}
                        total={selectedModulo?.totalQuestions}
                        inCorrect={inCorrect}
                        correct={correct}
                    />
                )}
            </div>
        </>
    )
}