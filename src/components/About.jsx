import books from '../assets/icons/books.png'
import cheese from '../assets/icons/cheese.png'
import ice from '../assets/icons/ice.png'
import java from '../assets/icons/java.png'
import webdev from '../assets/icons/webdev.png'
import collaboration from '../assets/icons/collaboration.png'

function About() {
    return (
        <section className="about-section py-5">
            <div className="container">
                <h2 className="section-title text-center mb-5">
                    About me.
                </h2>

                <div className="row justify-content-center g-5">
                    {/* Personal */}
                    <div className="col-md-5">
                        <div className="card p-5 h-100">
                            <h3 className="about-subtitle mb-4">
                                Personal
                            </h3>
                            <div className="d-flex flex-column gap-4">
                                <div className="about-item d-flex align-items-center gap-3">
                                    <img src={books} alt="Books Icon" className="about-icon" />
                                    Fictional Books
                                </div>
                                <div className="about-item d-flex align-items-center gap-3">
                                    <img src={cheese} alt="Cheese Icon" className="about-icon" />
                                    Cheese
                                </div>
                                <div className="about-item d-flex align-items-center gap-3">
                                    <img src={ice} alt="Ice Icon" className="about-icon" />
                                    Eating Ice
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Professional */}
                    <div className="col-md-5">
                        <div className="card p-5 h-100">
                            <h3 className="about-subtitle mb-4">
                                Professional
                            </h3>
                            <div className="d-flex flex-column gap-3">
                                <div className="about-item d-flex align-items-center gap-3">
                                    <img src={java} alt="Java Icon" className="about-icon" />
                                    Java
                                </div>
                                <div className="about-item d-flex align-items-center gap-3">
                                    <img src={webdev} alt="Web Development Icon" className="about-icon" />
                                    Web Development
                                </div>
                                <div className="about-item d-flex align-items-center gap-3">
                                    <img src={collaboration} alt="Collaboration Icon" className="about-icon" />
                                    Collaboration
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About