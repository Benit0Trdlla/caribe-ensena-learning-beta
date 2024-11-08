export const CardCourses = () => {
    return (
        <div className='col-12 col-md-6 col-lg-4 mt-5'>
            <div className="card">
                <img src="/Images/Logo_Cursos/NewSkills.png" width={"150px"} height={"150px"} style={{ objectFit: "cover" }} alt="" />
                <p className='d-lg-none'>Click para ver el progreso</p>
                <p className='d-none d-lg-block'>Hover para ver el progreso</p>
                <div className="card__content">
                    <div className='mb-2'>
                        <p className="card__title">Modulo 1</p>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: "26%" }}></div>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <p className="card__title">Modulo 1</p>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: "26%" }}></div>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <p className="card__title">Modulo 1</p>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: "26%" }}></div>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <p className="card__title">Modulo 1</p>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: "26%" }}></div>
                        </div>
                    </div>
                </div>

                <style>
                    {`
                    .card {
                    position: relative;
                    width: 350px;
                    aspect-ratio: 16/9;
                    background-color: #f2f2f2;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    perspective: 1000px;
                    box-shadow: 0 0 0 5px #ffffff80;
                    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    }


                    .card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
                    }

                    .card__content {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    padding: 15px;
                    box-sizing: border-box;
                    background-color: #f2f2f2;
                    transform: rotateX(-90deg);
                    transform-origin: bottom;
                    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    }

                    .card:hover .card__content {
                    transform: rotateX(0deg);
                    }

                    .card__title {
                    text-align: center;
                    margin-bottom: 2px;
                    font-size: 12px;
                    color: #333;
                    font-weight: 700;
                    }
                `}
                </style>
            </div>
        </div>
    )
}