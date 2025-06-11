'use client'

import { DataActivitiesContext } from "@/app/contexts/DataActivities-context";
import { useContext, useEffect } from "react"
import { useDataFromSheets } from "@/app/hooks/useDataFromSheets";

export default function RootLayout({ children }) {
    const { setData } = useContext(DataActivitiesContext);

    const { data: preguntas, isLoading, error } = useDataFromSheets("https://docs.google.com/spreadsheets/d/e/2PACX-1vQg5NJlYGcvO1sFUJsn7zApQc1yO_-1otSm2_eywy6bI4XpG3PZJYCnMhMbmz0srgUlp23UD50Hfco7/pub?output=csv");

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