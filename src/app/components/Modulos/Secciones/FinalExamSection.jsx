import { getSession } from '@auth0/nextjs-auth0';
import { FilePdf, Activities, ContenidoTeorico } from "../componentsSecciones";
import { usePathData } from '@/app/hooks/usePathData';
// import Certificado from "../../Certificado"

export const FinalExamSection = async () => {
    const { user } = await getSession();
    const { cursoName, cursoLevel } = usePathData();
    return (
        <div className="container">
            <div className="row d-flex justify-content-center mt-4">
                <div className="col-md-6">
                    <Activities />
                </div>
                <div className="col-md-6">
                    <ContenidoTeorico maxHeight={"640px"} />
                    {/* <Certificado nombre={user.name} /> */}
                </div>
            </div>
        </div>
        // <div className="final-exam-section">
        //     <h1>Final Exam Section</h1>
        //     <p>{user.name}</p>
        // </div>
    )
}