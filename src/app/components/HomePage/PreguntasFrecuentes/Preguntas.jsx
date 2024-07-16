export default function Preguntas({ children, title, flushheading, flushcollapse }) {
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id={flushheading}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${flushcollapse}`} aria-expanded="false" aria-controls={flushcollapse}>
                        {title}
                    </button>
                </h2>
                <div id={flushcollapse} className="accordion-collapse collapse" aria-labelledby={flushheading}
                    data-bs-parent="#accordionFlushExample">
                    <div className='accordion-body'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}