'use client'

import { DataActivitiesContext } from "@/app/contexts/DataActivities-context";
import { useContext, useEffect } from "react"
import { useDataFromSheets } from "@/app/hooks/useDataFromSheets";

export default function RootLayout({ children }) {
    const { setData } = useContext(DataActivitiesContext);

    const { data: preguntas, isLoading, error } = useDataFromSheets("https://docs.google.com/spreadsheets/d/e/2PACX-1vQoT2J63tNPTS_3EbTqCdiW8cSZmW8gDGRnWvit9zEs2i9XbLIiBi0g_xgXzOEs8TJoyw2wM0EFIetz/pub?output=csv");

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