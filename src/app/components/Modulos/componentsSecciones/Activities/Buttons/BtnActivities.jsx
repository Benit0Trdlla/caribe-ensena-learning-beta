export const BtnActivies = ({ indexActivities, updateIndex , answered }) => {
    const handlePrevClick = () => {
        const newIndex = indexActivities - 1;
        updateIndex(newIndex);  // nuevo índice al padre
    };

    const handleNextClick = () => {
        const newIndex = indexActivities + 1;
        updateIndex(newIndex);  // nuevo índice al padre
    };

    return (
        <div className='d-flex justify-content-center pb-4 pt-3'>
            <button type="button" className="btn btn-primary me-4" onClick={handlePrevClick}>Anterior</button>
            <button type="button" className="btn btn-primary" onClick={handleNextClick} disabled={answered}>Siguiente</button>
        </div>
    )
}