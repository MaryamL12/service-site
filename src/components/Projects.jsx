import paint from '../assets/images/paint-case.png'
import memory from '../assets/images/memory-case.png'
import shopping from '../assets/images/shopping-case.png'
import analytics from '../assets/images/analytics-case.png'

function Projects() {
    return (
        <section className="project-section py-5">
            <div className="container">
                <h2 className="section-title text-center mb-5">
                    Projects.
                </h2>

                <div className="row justify-content-center g-5">
                    <div className="col-lg-5">
                        <div className="card h-100">
                            <img 
                                src={paint}
                                alt="Paint"
                                className="project-image"
                            />
                            <div className="p-4">
                                <h3 className="project-subtitle mb-3">
                                    Painting service.
                                </h3>
                                <p className="project-description mb-4">
                                    A website to select and book painting services.
                                </p>
                                <a href="/paint-project.html" className="project-button">
                                    Visit
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="card h-100">
                            <img
                                src={memory}
                                alt="Memory Game"
                                className="project-image"
                            />
                            <div className="p-4">
                                <h3 className="project-subtitle mb-3">
                                    Memory game.
                                </h3>
                                <p className="project-description mb-4">
                                    A website to play a memory game.
                                </p>
                                <a href="/memory-project.html" className="project-button">
                                    Visit
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="card h-100">
                            <img
                                src={shopping}
                                alt="Shopping"
                                className="project-image"
                            />
                            <div className="p-4">
                                <h3 className="project-subtitle mb-3">
                                    E-commerce shopping.
                                </h3>
                                <p className="project-description mb-4">
                                    An online store for shopping.
                                </p>
                                <a href="shopping-project.html" className="project-button">
                                    Visit
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="card h-100">
                            <img
                                src={analytics}
                                alt="Analytics"
                                className="project-image"
                            />
                            <div className="p-4">
                                <h3 className="project-subtitle mb-3">
                                    Analytics dashboard.
                                </h3>
                                <p className="project-description mb-4">
                                    An analytics visualization dashboard.
                                </p>
                                <a href="analytics-project.html" className="project-button">
                                    Visit
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects