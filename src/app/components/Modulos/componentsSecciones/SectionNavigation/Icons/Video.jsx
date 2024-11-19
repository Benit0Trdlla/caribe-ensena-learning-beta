'use client'
import { useState, useEffect } from 'react'
import Link from "next/link"

export const Video = ({ href, isCompleted }) => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <>
            <Link href={isClient ? href : ""}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-film ${isCompleted && isClient ? 'text-success' : 'text-danger'} svg-icon`} viewBox="0 0 16 16"><path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" /></svg>
            </Link>
            <div className="vr d-none d-lg-block"></div>
        </>
    )
}