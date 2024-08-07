import CursosCard from "./CursosCard";
export default function Cursos() {
    const Cursos = [
        { Id: 1, Title: 'Enseñapaz', ImgUrl: '/Images/Logo_Cursos/Ensenapaz.png', href: '/Ensenapaz' },
        { Id: 2, Title: 'New skills', ImgUrl: '/Images/Home.png' },
        { Id: 3, Title: 'Derechos Humanos', ImgUrl: '/Images/Home.png' },
        { Id: 4, Title: 'Robótica', ImgUrl: '/Images/Donaciones.png' },
        { Id: 5, Title: 'Educación Financiera', ImgUrl: '/Images/Donaciones.png' },
        { Id: 6, Title: '...', ImgUrl: '/Images/Donaciones.png' },
    ]
    return (
        <div className="container">
            <div className="row">
                <CursosCard CursosInfo={Cursos} />
            </div>
        </div>
    )
}