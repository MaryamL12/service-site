import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [touched, setTouched] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const isFormValid =
        formData.firstName.trim() &&
        formData.lastName.trim() &&
        formData.email.trim() &&
        formData.message.trim();

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouched(true);

        if (isFormValid) {
            setSubmitted(true);
        }
    };

    const showError = (field) => touched && !formData[field].trim();

    return (
        <>
            {/* HERO */}
            <section className="page-hero py-5">
                <div className="container text-center">
                    <h1 className="title page-title">Contact</h1>
                    <p className="page-subtitle">
                        Visit, call, or fill out the form to request a consultation for pricing and booking
                    </p>
                </div>
            </section>

            {/* CONTENT */}
            <section className="py-5">
                <div className="container">
                    <div className="row g-5">
                        {/* LEFT */}
                        <div className="col-lg-5 fs-5">
                            <div className="d-flex mb-4">
                                <FaMapMarkerAlt className="contact-icon me-3" />
                                <div>
                                    <h3>Address</h3>
                                    <p>123 Example Road,<br />Ottawa, ON,<br />A1B 2C3</p>
                                </div>
                            </div>

                            <div className="d-flex mb-4">
                                <FaPhoneAlt className="contact-icon me-3" />
                                <div>
                                    <h3>Phone</h3>
                                    <p>123-456-7890</p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <FaClock className="contact-icon me-3" />
                                <div>
                                    <h3>Business Hours</h3>
                                    <p>
                                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                                        Saturday - Sunday: 9:00 AM - 4:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="col-lg-7">
                            <div className="contact-form-container">
                                {!submitted ? (
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label>
                                                First Name <span className="required">*</span>
                                            </label>
                                            <input
                                                name="firstName"
                                                className="form-control"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                            />
                                            {showError("firstName") && (
                                                <small className="text-danger">
                                                    First name is required
                                                </small>
                                            )}
                                        </div>

                                        <div className="mb-3">
                                            <label>
                                                Last Name <span className="required">*</span>
                                            </label>
                                            <input
                                                name="lastName"
                                                className="form-control"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                            />
                                            {showError("lastName") && (
                                                <small className="text-danger">
                                                    Last name is required
                                                </small>
                                            )}
                                        </div>

                                        <div className="mb-3">
                                            <label>
                                                Email <span className="required">*</span>
                                            </label>
                                            <input
                                                name="email"
                                                type="email"
                                                className="form-control"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            {showError("email") && (
                                                <small className="text-danger">
                                                    Email is required
                                                </small>
                                            )}
                                        </div>

                                        <div className="mb-3">
                                            <label>
                                                Message <span className="required">*</span>
                                            </label>
                                            <textarea
                                                name="message"
                                                className="form-control"
                                                rows="5"
                                                value={formData.message}
                                                onChange={handleChange}
                                            />
                                            {showError("message") && (
                                                <small className="text-danger">
                                                    Message is required
                                                </small>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn page-btn"
                                        >
                                            Submit
                                        </button>

                                    </form>
                                ) : (
                                    <div className="confirmation-box text-center">
                                        <h2>Thank you for reaching out to us!</h2>
                                        <p>We will get back to you within 2 business days.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;