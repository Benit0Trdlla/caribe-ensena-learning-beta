import CursosCard from "./CursosCard";
import { CURSOS } from "@/app/lib/consts"; 
export const Cursos = () => {
    return (
        <div className="container">
            <div className="row mb-5">
                <CursosCard CursosInfo={CURSOS} />
            </div>
        </div>
    )
}