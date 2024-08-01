import Header from "../components/ExplicacionCursos/Header";
import RightColumn from "../components/ExplicacionCursos/RightColumn";
import LeftColumn from "../components/ExplicacionCursos/LeftColumn";
import AccordionModulos from "../components/ExplicacionCursos/AccordionModulos";
export default function EnsenapazPage() {
    return (
        <>
            <Header ImgUrl="/Images/Logo/Header.png" href="/Cursos" />
            <div className="container">
                <div className="px-1 py-5 row">
                    <LeftColumn title={"Ensenapaz"}>
                        <AccordionModulos title={"1. Modulo 1"} collapseNumber={"collapseOne"}>
                            <p>
                                Ensenapaz es un programa de formación en educación y cultura de paz dirigido a los docentes de nuestras escuelas,
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"2. Modulo 2"} collapseNumber={"collapseTwo"}>
                            <p>
                                Ensenapaz es un programa de formación en educación y cultura de paz dirigido a los docentes de nuestras escuelas,
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"3. Modulo 3"} collapseNumber={"collapseThree"}>
                            <p>
                                Ensenapaz es un programa de formación en educación y cultura de paz dirigido a los docentes de nuestras escuelas,
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"4. Modulo 4"} collapseNumber={"collapseFour"}>
                            <p>
                                Ensenapaz es un programa de formación en educación y cultura de paz dirigido a los docentes de nuestras escuelas,
                            </p>
                        </AccordionModulos>
                    </LeftColumn>
                    <RightColumn>
                        <p id="Presentación">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente accusantium, ducimus temporibus culpa voluptatem recusandae, eum asperiores ipsam iste ex neque amet, ipsa eos! Eos alias quibusdam hic itaque non!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur blanditiis, suscipit, officiis odit consequuntur atque cum deleniti at tempora saepe aliquid laudantium animi. Quia enim ab quam eius distinctio iure?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non culpa, rerum, voluptates voluptatibus ea amet rem ratione, ut totam nam reprehenderit consequatur quam perferendis assumenda distinctio voluptate consectetur quae corrupti?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita alias odit dolores. Molestias excepturi architecto consequatur minima iure qui commodi earum placeat? Consequatur quos nisi nihil voluptate inventore exercitationem vero!
                        </p>
                        <p id="Contenidos">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente accusantium, ducimus temporibus culpa voluptatem recusandae, eum asperiores ipsam iste ex neque amet, ipsa eos! Eos alias quibusdam hic itaque non!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur blanditiis, suscipit, officiis odit consequuntur atque cum deleniti at tempora saepe aliquid laudantium animi. Quia enim ab quam eius distinctio iure?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non culpa, rerum, voluptates voluptatibus ea amet rem ratione, ut totam nam reprehenderit consequatur quam perferendis assumenda distinctio voluptate consectetur quae corrupti?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita alias odit dolores. Molestias excepturi architecto consequatur minima iure qui commodi earum placeat? Consequatur quos nisi nihil voluptate inventore exercitationem vero!
                        </p>
                    </RightColumn>
                </div>
            </div>
        </>
    );
}