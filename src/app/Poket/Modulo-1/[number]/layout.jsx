'use client'

import { DataActivitiesContext } from "@/app/contexts/DataActivities-context";
import { useContext, useEffect } from "react"
import { useDataFromSheets } from "@/app/hooks/useDataFromSheets";

export default function RootLayout({ children }) {
    const { setData } = useContext(DataActivitiesContext);

    const { data: preguntas, isLoading, error } = useDataFromSheets("https://docs.google.com/spreadsheets/d/e/2PACX-1vQtjH2Itb93QQ8dnWEr45s0eL654LlfNJMsT5smcyQi-dgVNmyW5Ce1xJqpEWW4xLa1TWX9de-8f6nX/pub?output=csv");

    useEffect(() => {
        if (!isLoading && !error) {
            setData(preguntas);
        }
    }, [preguntas, isLoading, error, setData]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {children}
        </>
    );
}