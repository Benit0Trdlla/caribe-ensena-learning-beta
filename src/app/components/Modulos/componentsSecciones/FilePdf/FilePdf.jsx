'use client'
import styles from "./FilePdf.module.css"
import { useState } from 'react'
export const FilePdf = ({ href }) => {
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
            <iframe
                onLoad={handleLoad}
                src={href}
                style={{ display: loading ? 'none' : 'block', width: '100%', height: '400px' }}
                className={styles['pdf-iframe']}
            />
        </div>
    )
}