'use client'
import { DataActivitiesContext } from "@/app/contexts/DataActivities-context";
import { useContext, useEffect } from "react"
import { useDataFromSheets } from "@/app/hooks/useDataFromSheets";
import Loading from "@/app/components/loading";

export default function RootLayout({ children }) {
    const { setData } = useContext(DataActivitiesContext);
    const { data: preguntas, isLoading, error } = useDataFromSheets("https://docs.google.com/spreadsheets/d/e/2PACX-1vTglRUrrd5tgS3fAOxPLHasDa0nEG14n8WRGFSWemLNva0-oBm4lWq3_WYjb1hPaeoG2UzBsdxYEU6X/pub?output=csv");
    useEffect(() => {
        if (!isLoading && !error) {
            setData(preguntas);
        }
    }, [preguntas, isLoading, error, setData]);

    if (error) return <div>Error: {error.message}</div>;
    
    if (isLoading) return <Loading styleSpinner="text-success" />

    return (
        <>
            {children}
        </>
    );
}