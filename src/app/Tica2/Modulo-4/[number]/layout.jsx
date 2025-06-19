'use client'
import { DataActivitiesContext } from "@/app/contexts/DataActivities-context";
import { useContext, useEffect } from "react"
import { useDataFromSheets } from "@/app/hooks/useDataFromSheets";
import { useModuloStatus } from "@/app/hooks/useModuloStatus";

export default function RootLayout({ children }) {
    const modulo = useModuloStatus()

    const { setData } = useContext(DataActivitiesContext);
    const { data: preguntas, isLoading, error } = useDataFromSheets("https://docs.google.com/spreadsheets/d/e/2PACX-1vQRP3Ln2LI-0VSvhbwPDoHq7q7Q-0K24z8KjL0RO-BTYff-8oe2oa87Q-Vi6NkEnE2BCnXTD-zoVeLY/pub?output=csv");
    useEffect(() => {
        if (!isLoading && !error) {
            setData(preguntas);
        }
    }, [preguntas, isLoading, error, setData]);

    if (error) return <div>Error: {error.message}</div>;

    if (isLoading) {
        return (
            <>
                <h1 className="text-center mt-5">Espere un momento...</h1>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border m-5 text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </>
        );
    }
    
    if (modulo < 100) return <div className="d-flex mt-5 text-danger align-items-center justify-content-center">El Modulo 3 no fue completado, tienes {modulo}%</div>

    return (
        <>
            {children}
        </>
    );
}