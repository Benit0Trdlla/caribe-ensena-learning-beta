'use client'
import { useHidratationSolution } from "@/app/hooks/useHidratationSolution";
import Link from "next/link";

export const Exam = ({ href, isCompleted }) => {
    const isClient = useHidratationSolution();
    return (
        <>
            <Link href={isClient ? href : ""}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-pencil-square ${isCompleted && isClient ? 'text-success' : 'text-danger'} svg-icon`} viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" /><path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" /></svg>            
            </Link>
            <div className="vr d-none d-lg-block"></div>
        </>
    )
}