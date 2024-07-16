export default function CardServicesList({ children }) {
    return (
        <div id="services" className="container py-5 mt-2">
            <div className="text-center">
                <h2 className="mb-2 mt-3">SERVICIOS</h2>
                <hr className="w-25 mx-auto" />
            </div>
            <div className="row" >
                {children}
            </div>
        </div>
    )
}