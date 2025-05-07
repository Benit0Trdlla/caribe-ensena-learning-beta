import CursosCard from "./CursosCard";
export const Cursos = () => {
    const Cursos = [
        { Id: 1, Title: 'Enseñapaz', ImgUrl: '/Images/Logo_Cursos/Ensenapaz.png', href: 'Ensenapaz' },
        { Id: 2, Title: 'New skills', ImgUrl: '/Images/Logo_Cursos/NewSkills.png', href: 'Newskills' },
        { Id: 3, Title: 'Tica', ImgUrl: '/Images/Logo_Cursos/Tica.png', href: 'Tica' },
        { Id: 4, Title: 'Poket', ImgUrl: '/Images/Logo_Cursos/Poket.png', href: 'Poket' },
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