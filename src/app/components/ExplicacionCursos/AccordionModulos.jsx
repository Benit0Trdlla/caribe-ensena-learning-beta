export const AccordionModulos = ({ children, title, collapseNumber }) => {
    return (
        <div className="accordion mt-3" id="accordionExample">
            <div className="accordion-item border border-0">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseNumber}`} aria-expanded="false" aria-controls={collapseNumber}>
                        {title}
                    </button>
                </h2>
                <div id={collapseNumber} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="overflow-auto accordion-body" style={{ maxHeight: '300px' }}>
                        {children}
                    </div>
                </div>
            </div>
            <style>
                {`
                    .accordion{
                        --bs-accordion-bg: #transparent !important;
                    }
                `}
            </style>
        </div>
    )
}