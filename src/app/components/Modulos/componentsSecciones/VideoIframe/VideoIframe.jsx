'use client'
import { useState, useContext, useEffect } from 'react';
import { DataActivitiesContext } from '@/app/contexts/DataActivities-context'
import styles from './VideoIframe.module.css'
export const VideoIframe = ({ href }) => {
    const { data, indexContext } = useContext(DataActivitiesContext);
    return (
        <div className={styles['responsive-iframe']}>
            <iframe width="560" height="315" src={data[indexContext].VideoURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}