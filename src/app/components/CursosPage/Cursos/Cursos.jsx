import CursosCard from "./CursosCard";
export const Cursos = () => {
    const Cursos = [
        { Id: 1, Title: 'Tica', ImgUrl: '/Images/Logo_Cursos/Tica.png', href: 'Tica' },
        { Id: 2, Title: 'Tica 2', ImgUrl: '/Images/Logo_Cursos/Tica2.png', href: 'Tica2' },
        // { Id: 3, Title: 'Enseñapaz', ImgUrl: '/Images/Logo_Cursos/Ensenapaz.png', href: 'Ensenapaz' },
        { Id: 4, Title: 'New skills', ImgUrl: '/Images/Logo_Cursos/NewSkills.png', href: 'Newskills' },
        { Id: 5, Title: 'Poket', ImgUrl: '/Images/Logo_Cursos/Poket.png', href: 'Poket' },
        { Id: 6, Title: 'English Basic 1', ImgUrl: '/Images/Logo_Cursos/EnglishBasic1.png', href: 'EnglishBasic1' },
        { Id: 7, Title: 'English Basic 2', ImgUrl: '/Images/Logo_Cursos/EnglishBasic2.png', href: 'EnglishBasic2' },
        { Id: 8, Title: 'English Intermediate 1', ImgUrl: '/Images/Logo_Cursos/EnglishIntermediate1.png', href: 'EnglishIntermediate1' },
        { Id: 9, Title: 'English Intermediate 2', ImgUrl: '/Images/Logo_Cursos/EnglishIntermediate2.png', href: 'EnglishIntermediate2' },
        { Id: 10, Title: 'Python Project Pro', ImgUrl: '/Images/Logo_Cursos/PythonProjectPro.png', href: 'PythonProjectPro' },
        { Id: 11, Title: 'Francés Básico 1', ImgUrl: '/Images/Logo_Cursos/FrancesBasico1.png', href: 'FrancesBasico1' },
    ]
    return (
        <div className="container">
            <div className="row">
                <CursosCard CursosInfo={Cursos} />
            </div>
        </div>
    )
}