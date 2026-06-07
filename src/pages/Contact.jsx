import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="page-hero">
                <div className="container text-center">
                    <h1 className="title page-title">Contact</h1>

                    <p className="page-subtitle">
                        Visit, call, or fill out the form to request a consultation for pricing and booking
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-content">
                        {/* Left Side */}
                        <div className="contact-info">
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <div>
                                    <h3>Address</h3>
                                    <p>
                                        123 Example Road,<br />
                                        Ottawa, ON,<br />
                                        A1B 2C3
                                    </p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <FaPhoneAlt className="contact-icon" />
                                <div>
                                    <h3>Phone</h3>
                                    <p>123-456-7890</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <FaClock className="contact-icon" />
                                <div>
                                    <h3>Business Hours</h3>
                                    <p>
                                        Monday - Friday: 8:00 AM - 6:00 PM
                                        <br />
                                        Saturday - Sunday: 9:00 AM - 4:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="contact-form-container">
                            {!submitted ? (
                                <form onSubmit={handleSubmit}>

                                    <div className="mb-3">
                                        <label className="form-label">
                                            First Name <span className="required">*</span>
                                        </label>
                                        <input type="text" className="form-control" required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Last Name <span className="required">*</span>
                                        </label>
                                        <input type="text" className="form-control" required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Email Address <span className="required">*</span>
                                        </label>
                                        <input type="email" className="form-control" required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Message <span className="required">*</span>
                                        </label>
                                        <textarea className="form-control" rows="5" required />
                                    </div>

                                    <button type="submit" className="btn page-btn">
                                        Submit
                                    </button>

                                </form>
                            ) : (
                                <div className="confirmation-box">
                                    <h2>Thank you for reaching out to us!</h2>
                                    <p>
                                        We will get back to you within 2 business days.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;