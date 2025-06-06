'use client';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import { DataActivitiesContext } from '@/app/contexts/DataActivities-context';

export const ContenidoTeorico = ({ maxHeight }) => {
    const { data, indexContext } = useContext(DataActivitiesContext);

    // Obtener el numero de la seccion desde la URL
    const params = useParams()
    const number = parseInt(params.number);

    // Seleccionar las 5 preguntas correspondientes para cada seccion
    const startIndex = (number - 1) * 5;
    const endIndex = startIndex + 5;
    const selectedQuestions = data.slice(startIndex, endIndex);

    return (
        <>
            <p className="text-center fw-bold">{selectedQuestions && selectedQuestions.length > 0 && selectedQuestions[indexContext].Titulo}</p>
            <div className="overflow-auto" style={{ maxHeight: maxHeight ? maxHeight : "auto" }}>
                <p>
                    {selectedQuestions && selectedQuestions.length > 0 && selectedQuestions[indexContext].Teoria}
                </p>
                <style>
                    {`
                     /* Estilos para la barra de desplazamiento */
                                    .overflow-auto::-webkit-scrollbar {
                                        width: 8px;
                                    }

                                    /* Estilos para el thumb de la barra de desplazamiento */
                                    .overflow-auto::-webkit-scrollbar-thumb {
                                        background-color: #888;
                                        border-radius: 4px;
                                    }

                                    /* Estilos para el thumb de la barra de desplazamiento al pasar el cursor */
                                    .overflow-auto::-webkit-scrollbar-thumb:hover {
                                        background-color: #555;
                                    }
                    `}
                </style>
            </div>
        </>
    );
}