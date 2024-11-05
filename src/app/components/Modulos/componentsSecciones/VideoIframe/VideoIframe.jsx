'use client'

import styles from './VideoIframe.module.css'
import { useParams } from 'next/navigation'
import { useContext } from 'react';
import { DataActivitiesContext } from '@/app/contexts/DataActivities-context'

export const VideoIframe = () => {
    const { data, indexContext } = useContext(DataActivitiesContext);

    // Obtener el numero de la seccion desde la URL
    const params = useParams()
    const number = parseInt(params.number);

    // Seleccionar las 5 preguntas correspondientes para cada seccion
    const startIndex = (number - 1) * 5;
    const endIndex = startIndex + 5;
    const selectedQuestions = data.slice(startIndex, endIndex);

    return (
        <div className={styles['responsive-iframe']}>
            <iframe width="560" height="315" src={selectedQuestions && selectedQuestions.length > 0 ? selectedQuestions[indexContext].VideoURL : null} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}