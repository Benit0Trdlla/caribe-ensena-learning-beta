'use client'

import styles from "./FilePdf.module.css"
import { useState, useContext } from 'react'
import { DataActivitiesContext } from '@/app/contexts/DataActivities-context'
import { useSelectedQuestions } from "@/app/hooks/useSelectedQuestions"
import IframeGoogleDrive from "./IframeGoogleDrive"

export const FilePdf = () => {
    const { data, indexContext } = useContext(DataActivitiesContext);

    // Seleccionar las 5 preguntas correspondientes para cada seccion
    const { selectedQuestions } = useSelectedQuestions(data);

    const [loading, setLoading] = useState(true);
    const handleLoad = () => {
        setLoading(false);
    };

    return (
        <div className={styles['pdf-container']}>
            {loading && (
                <div className={styles.skeleton}>
                    <div className={styles['skeleton-rect']}></div>
                </div>
            )}
            {/* <iframe
                onLoad={handleLoad}
                src={selectedQuestions && selectedQuestions.length > 0 ? selectedQuestions[indexContext].PdfUrl : null}
                style={{ display: loading ? 'none' : 'block', width: '100%', height: '400px' }}
                className={styles['pdf-iframe']}
            /> */}
            <IframeGoogleDrive className={styles['pdf-iframe']} src={selectedQuestions && selectedQuestions.length > 0 ? selectedQuestions[indexContext].PdfUrl : null} onLoad={handleLoad} />
        </div>
    )
}