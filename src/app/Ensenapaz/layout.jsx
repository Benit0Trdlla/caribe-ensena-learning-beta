import DataActivitiesContextProvider from "@/app/contexts/DataActivities-context";
export default function RootLayout({ children }) {
    return (
        <DataActivitiesContextProvider>
            {children}
        </DataActivitiesContextProvider>
    );
}