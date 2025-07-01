export const AddImagen = ({ url, alt }) => {
    return (
        <>
            <img src={url} alt={alt} className="img-fluid my-2" style={{ width: "auto", height: "150px", display: "block", margin: "auto" }} />
        </>
    )
}