import CursosCard from "./CursosCard";
export default function Cursos() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <CursosCard ImgUrl={"/Images/Donaciones.png"} Title={"Access to training"} />
                </div>
                <div className="col ">
                    <CursosCard ImgUrl={"/Images/Home.png"} Title={"New Skills"} />
                </div>
                <div className="col ">
                    <CursosCard ImgUrl={"/Images/Home.png"} Title={"Derechos Humanos"} />
                </div>
            </div>
            <div className="row">
                <div className="col ">
                    <CursosCard ImgUrl={"/Images/Home.png"} Title={"Robótica"} />
                </div>
                <div className="col ">
                    <CursosCard ImgUrl={"/Images/Home.png"} Title={"Educación Financiera"} />
                </div>
                <div className="col ">
                    <CursosCard ImgUrl={"/Images/Home.png"} Title={"..."} />
                </div>
            </div>
        </div>
    )
}