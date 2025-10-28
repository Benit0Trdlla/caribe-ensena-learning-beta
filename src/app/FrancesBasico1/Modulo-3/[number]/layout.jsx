'use client'
import { DataActivitiesContext } from "@/app/contexts/DataActivities-context";
import { useContext, useEffect } from "react"
import { useDataFromSheets } from "@/app/hooks/useDataFromSheets";
import { useModuloStatus } from "@/app/hooks/useModuloStatus";
import { useSeccionStatus } from "@/app/hooks/useSeccionStatus";
import { useCheckCompletion } from "@/app/hooks/useCheckCompletion";
import Loading from "@/app/components/loading";

export default function RootLayout({ children, params }) {
    const numInt = parseInt(params.number)

    if (numInt > 7) return <div className="text-center text-danger mt-5">404 Not Found</div>

    const seccionCompleted = useSeccionStatus(numInt);
    
    const modulo = useModuloStatus()

    const CheckCompletion = useCheckCompletion({ modulo, seccionCompleted, numInt });

    const { setData } = useContext(DataActivitiesContext);
    const { data: preguntas, isLoading, error } = useDataFromSheets("https://docs.google.com/spreadsheets/d/e/2PACX-1vSnc2dbiggWhIQmFmX8VkfwDxj75Kla_LS6FrHg5E6iIEawjCzllcE0mm83L6SybB0032_Q2qvdHugT/pub?output=csv");
    useEffect(() => {
        if (!isLoading && !error) {
            setData(preguntas);
        }
    }, [preguntas, isLoading, error, setData]);

    if (error) return <div>Error: {error.message}</div>;

    if (isLoading) return <Loading styleSpinner="text-info" />
    
    if (!CheckCompletion.isCompleted) return <div className="d-flex mt-5 text-danger align-items-center justify-content-center">{CheckCompletion.message}</div>

    return (
        <>
            {children}
        </>
    );
}