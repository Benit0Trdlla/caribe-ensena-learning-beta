'use client';
import { useContext } from 'react';
import { DataActivitiesContext } from '@/app/contexts/DataActivities-context';
import { useSelectedQuestions } from '@/app/hooks/useSelectedQuestions';
import { AddImagen, Audios } from '..';

export const ContenidoTeorico = ({ maxHeight }) => {
    const { data, indexContext } = useContext(DataActivitiesContext);

    // Seleccionar las 5 preguntas correspondientes para cada seccion
    const { selectedQuestions } = useSelectedQuestions(data);

    const parseTeoria = (textToParse) => {
        return textToParse
            .replace(/\\n/g, '\n') // convierte \\n a \n reales
            .split('\n\n')         // divide en párrafos
            .map((parrafo, index) => (
                <p key={index}>{parrafo.replace(/\n/g, ' ')}</p>
            ));
    }

    return (
        <>
            <p className="text-center fw-bold">{selectedQuestions && selectedQuestions.length > 0 && selectedQuestions[indexContext].Titulo}</p>
            <div className="overflow-auto" style={{ maxHeight: maxHeight ? maxHeight : "auto" }}>
                {selectedQuestions && selectedQuestions.length > 0 &&
                    selectedQuestions[indexContext].Teoria && (
                        <>
                            {parseTeoria(selectedQuestions[indexContext].Teoria)}
                            {selectedQuestions[indexContext].Imagen && <AddImagen dataUrl={selectedQuestions[indexContext].Imagen} alt={selectedQuestions[indexContext].Titulo} />}
                            {selectedQuestions[indexContext].Audio && <Audios url={selectedQuestions[indexContext].Audio} />}
                        </>
                    )
                }
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