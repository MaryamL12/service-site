import { Link } from "react-router-dom";

function ServiceDetail({
    image,
    title,
    description,
    includes
}) {
        return (
            <>
                <section className="service-detail-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <img
                                    src={image}
                                    alt={title}
                                    className="img-fluid service-image"
                                />
                            </div>

                            <div className="col-lg-6">
                                <h1 className="service-title">{title}</h1>

                                <p className="service-description">{description}</p>
                                
                                <h5 className="mt-4">Service Includes:</h5>

                                <ul>
                                    {includes.map((item, index) => (
                                        <li key={index}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Link to="/contact" className="btn page-btn mt-4">
                                    Contact us for a consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
}

export default ServiceDetail;