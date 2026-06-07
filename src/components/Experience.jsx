function Experience() {
    return (
        <section className="experience-section py-5">
            <div className="container">
                <h2 className="section-title text-center mb-5">
                    Experience.
                </h2>
                <div className="row align-items-center justify-content-between">
                    {/* Left side */}
                    <div className="col-lg-7">
                        <p className="experience-text">
                            I am currently taking a UI design course where I will be learning elements of visual design and communication, user interface, and user experience.
                        </p>

                        <p className="experience-text">
                            I will be adding more information on the skills I learn in this section throughout the course. So far I have learned about layout, typography, colours, and icons.
                        </p>
                    </div>

                    {/* Right side */}
                    <div className="col-lg-4">
                        <div className="experience-links d-flex flex-column gap-4">
                            <a
                                href="https://uottawa.brightspace.com/d2l/le/content/592979/Home?itemIdentifier=TOC"
                                target="_blank"
                                className="experience-link"
                            >
                                Course Module 1
                            </a>

                            <a
                                href="https://www.youtube.com/watch?v=5KUNmgt_pvY"
                                target="_blank"
                                className="experience-link"
                            >
                                UX vs. UI
                            </a>

                            <a
                                href="https://www.nngroup.com/articles/principles-visual-design/"
                                target="_blank"
                                className="experience-link"
                            >
                                5 Principles of Visual Design in UX
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience