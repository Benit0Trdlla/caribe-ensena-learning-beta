'use client'
import { DataActivitiesContext } from "@/app/contexts/DataActivities-context"
import { useContext, useEffect } from "react"
import { useDataFromSheets } from "@/app/hooks/useDataFromSheets"

export default function RootLayout({ children }) {
    const { setData } = useContext(DataActivitiesContext);

    const { data: preguntas, isLoading, error } = useDataFromSheets("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5lG7ihT8C5idJRf9PFkm9tzR8LBhKlak8Z0prnaBGNso63Hd9VstJCldz7NDJvbiaM0AP3IKY1-22/pub?output=csv");
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoading) {
        setData(preguntas);
    }
    // useEffect(() => {
    // }, [preguntas]);

    return (
        <>
            {children}
        </>
    );
}