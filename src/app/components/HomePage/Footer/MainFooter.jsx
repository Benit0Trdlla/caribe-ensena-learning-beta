import Image from 'next/image';
export default function MainFooter({ children, srcImg, titleMiddle, titleEnd }) {
    return (
        <footer className="footer mt-auto">
            <section className="bg-light py-4 py-md-5 py-xl-8 border-top">
                <div className="container overflow-hidden">
                    <div className="row gy-4 gy-lg-0 justify-content-xl-between">
                        <div className="col-12 col-md-4 col-lg-3 col-xl-3">
                            <div className="widget">
                                <div className='d-flex justify-content-center align-items-center'>
                                    <Image src={srcImg} width={120} height={120} alt='Logo Proyecto Genius' priority={true} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 col-xl-4 text-center">
                            <div className="widget">
                                <h4 className="widget-title">{titleMiddle}</h4>
                                {/* <address className="mb-4">Fundación Caribe Enseña</address> */}
                                <p className="mb-0">
                                    {children[0]}
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 col-xl-4 text-center">
                            <div className="widget">
                                <h4 className="widget-title mb-2">{titleEnd}</h4>
                                {children[1]}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {children[2]}
        </footer>
    )
}