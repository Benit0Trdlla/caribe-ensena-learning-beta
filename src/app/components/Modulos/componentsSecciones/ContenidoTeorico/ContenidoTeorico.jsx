'use client';
import { useContext } from 'react';
import { DataActivitiesContext } from '@/app/contexts/DataActivities-context';

export const ContenidoTeorico = ({ maxHeight }) => {
    const { data, indexContext } = useContext(DataActivitiesContext);
    return (
        <>
            <p className="text-center fw-bold">
                {data[indexContext].Titulo}
            </p>
            <div className="overflow-auto" style={{ maxHeight: maxHeight ? maxHeight : "auto" }}>
                <p>
                    {data[indexContext].Teoria}
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