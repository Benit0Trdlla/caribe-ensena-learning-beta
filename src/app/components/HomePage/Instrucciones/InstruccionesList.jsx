import Convenios from "./Convenios/Convenios"
import Instituciones from "./Instituciones/Instituciones"
import Areas from "./Areas/Areas"
import Cursos from "./Cursos/Cursos"
export default function InstruccionesList({ children }) {
    return (
        <div className="container px-1 py-5" id="instrucciones">
            <div className="row align-items-start">
                <Cursos />
                <Areas />
                <Convenios />
                <Instituciones />
            </div>
        </div>
    )
}