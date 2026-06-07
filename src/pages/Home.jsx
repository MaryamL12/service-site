import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <section className="hero">
                <div className="container text-center">
                    <h1 className="title hero-title">All-Colours</h1>

                    <p className="hero-subtitle">
                        Professional residential and commercial painting services
                    </p>

                    <div className="mt-5">
                        <button
                            className="btn page-btn me-3"
                            onClick={() => navigate('/services')}
                        >
                            Services
                        </button>

                        <button
                            className="btn page-btn"
                            onClick={() => navigate('/contact')}
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <div className="container">
                    <h2 className="about-title">About Us</h2>

                    <p className="about-text">
                        We are a local painting company that provides residential and commercial painting services.
                        We specialize in interior painting, exterior painting, and office painting projects.
                        Explore our available services and book a consultation appointment.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Home;