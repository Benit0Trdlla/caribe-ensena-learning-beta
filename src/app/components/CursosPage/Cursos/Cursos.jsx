import CursosCard from "./CursosCard";
export const Cursos = () => {
    const Cursos = [
        { Id: 1, Title: 'Enseñapaz', ImgUrl: '/Images/Logo_Cursos/Ensenapaz.png', href: 'Ensenapaz' },
        { Id: 2, Title: 'New skills', ImgUrl: '/Images/Logo_Cursos/NewSkills.png', href: 'Newskills' }
        // { Id: 3, Title: 'Derechos Humanos', ImgUrl: '/Images/Home.png', href: '/DerechosHumanos' },
        // { Id: 4, Title: 'Robótica', ImgUrl: '/Images/Donaciones.png', href: '/Robotica' },
        // { Id: 5, Title: 'Educación Financiera', ImgUrl: '/Images/Donaciones.png', href: '/EducacionFinanciera' },
    ]
    return (
        <div className="container">
            <div className="row">
                <CursosCard CursosInfo={Cursos} />
            </div>
        </div>
    )
}