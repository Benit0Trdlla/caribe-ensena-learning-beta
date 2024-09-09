export default function ContenidoTeorico({maxHeight}) {
    return (
        <>
            <p className="text-center fw-bold">
                Titulo del contenido
            </p>
            <div className="overflow-auto" style={{ maxHeight: maxHeight ? maxHeight : "auto"}}>
                <p>
                    rem ipsum dolor sit amet consectetur, adipisicing elit. Quia itaque consequatur iusto esse nobis ipsa aliquam aut deleniti labore hic ullam eaque nam sit rerum id debitis exercitationem, temporibus laborum?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem excepturi reprehenderit est facilis perspiciatis quos blanditiis aperiam dolorem quis praesentium iusto cupiditate, eos sed, a eligendi distinctio debitis exercitationem quam.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati aperiam laboriosam totam sapiente corporis praesentium? Soluta suscipit repellat assumenda nostrum debitis architecto earum beatae. Nesciunt cupiditate nemo quasi officiis!
                    Lore
                    rem ipsum dolor sit amet consectetur, adipisicing elit. Quia itaque consequatur iusto esse nobis ipsa aliquam aut deleniti labore hic ullam eaque nam sit rerum id debitis exercitationem, temporibus laborum?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem excepturi reprehenderit est facilis perspiciatis quos blanditiis aperiam dolorem quis praesentium iusto cupiditate, eos sed, a eligendi distinctio debitis exercitationem quam.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati aperiam laboriosam totam sapiente corporis praesentium? Soluta suscipit repellat assumenda nostrum debitis architecto earum beatae. Nesciunt cupiditate nemo quasi officiis!
                    Lore
                    rem ipsum dolor sit amet consectetur, adipisicing elit. Quia itaque consequatur iusto esse nobis ipsa aliquam aut deleniti labore hic ullam eaque nam sit rerum id debitis exercitationem, temporibus laborum?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem excepturi reprehenderit est facilis perspiciatis quos blanditiis aperiam dolorem quis praesentium iusto cupiditate, eos sed, a eligendi distinctio debitis exercitationem quam.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati aperiam laboriosam totam sapiente corporis praesentium? Soluta suscipit repellat assumenda nostrum debitis architecto earum beatae. Nesciunt cupiditate nemo quasi officiis!
                    Lore
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia itaque consequatur iusto esse nobis ipsa aliquam aut deleniti labore hic ullam eaque nam sit rerum id debitis exercitationem, temporibus laborum?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem excepturi reprehenderit est facilis perspiciatis quos blanditiis aperiam dolorem quis praesentium iusto cupiditate, eos sed, a eligendi distinctio debitis exercitationem quam.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati aperiam laboriosam totam sapiente corporis praesentium? Soluta suscipit repellat assumenda nostrum debitis architecto earum beatae. Nesciunt cupiditate nemo quasi officiis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, explicabo. Deserunt velit minima voluptas magnam modi veniam vero culpa libero harum minus, adipisci voluptate veritatis error pariatur aperiam inventore dicta.
                </p>
                <style>{`
                     /* Estilos para la barra de desplazamiento */
                                    .overflow-auto::-webkit-scrollbar {
                                        width: 8px;
                                    }

                                    /* Estilos para el thumb de la barra de desplazamiento */
                                    .overflow-auto::-webkit-scrollbar-thumb {
                                        background-color: #888;
                                        border-radius: 4px;
                                    }

                                    /* Estilos para el thumb de la barra de desplazamiento al pasar el cursor */
                                    .overflow-auto::-webkit-scrollbar-thumb:hover {
                                        background-color: #555;
                                    }
                `}</style>
            </div>
        </>
    );
}