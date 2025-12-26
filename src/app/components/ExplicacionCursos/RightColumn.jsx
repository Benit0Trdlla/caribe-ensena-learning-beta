export const RightColumn = ({ children }) => {
    return (
        <div className="col-md-6 mt-lg-2 mt-5">
            <nav className="nav border-bottom justify-content-center">
                <a className="nav-link text-info" href="#Presentación">Presentación</a>
                <a className="nav-link text-info" href="#Contenidos">Contenidos</a>
                <a className="nav-link text-info" href="#Recursos">Recursos</a>
            </nav>
            <div className="overflow-auto overflow-x-hidden p-3" style={{ maxHeight: '390px' }}>
                {children}
            </div>
            <style>
                {`
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
                                `}
            </style>
        </div>
    )
}