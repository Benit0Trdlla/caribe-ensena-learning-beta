export default function SubFooter({children}) {
    return (
        <>
            <div className="bg-light py-4 py-md-5 py-xl-8 border-top border-light-subtle">
                <div className="container overflow-hidden">
                    <div className="row gy-4 gy-md-0">
                        <div className="col-xs-12 col-md-7 order-1 order-md-0">
                            <div className="copyright text-center text-md-start">
                                &copy; 2024. Todos los derechos reservados.
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-5 order-0 order-md-1">
                            <ul className="nav justify-content-center justify-content-md-end">
                                {children}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}