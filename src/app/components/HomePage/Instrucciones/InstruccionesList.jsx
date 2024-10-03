import Cursos from "./Cursos/Cursos"
import Areas from "./Areas/Areas"
import Convenios from "./Convenios/Convenios"
import Instituciones from "./Instituciones/Instituciones"
export const InstruccionesList = () => {
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