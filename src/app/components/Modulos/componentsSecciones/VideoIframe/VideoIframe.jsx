'use client'

import styles from './VideoIframe.module.css'
import { useContext } from 'react';
import { DataActivitiesContext } from '@/app/contexts/DataActivities-context'
import { useSelectedQuestions } from '@/app/hooks/useSelectedQuestions';

export const VideoIframe = () => {
    const { data, indexContext } = useContext(DataActivitiesContext);

    // Seleccionar las 5 preguntas correspondientes para cada seccion
    const { selectedQuestions } = useSelectedQuestions(data);

    return (
        <div className={styles['responsive-iframe']}>
            <iframe width="560" height="315" src={selectedQuestions && selectedQuestions.length > 0 ? selectedQuestions[indexContext].VideoURL : null} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}