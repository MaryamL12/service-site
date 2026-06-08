import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import interior from '../assets/images/interior.jpg'
import whole from '../assets/images/whole.jpg'
import exterior from '../assets/images/exterior.jpg'
import office from '../assets/images/office.jpg'
import retail from '../assets/images/retail.jpg'
import building from '../assets/images/building.jpg'

function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-hero py-5">
        <div className="container text-center">
          <h1 className="title page-title">Services</h1>

          <p className="page-subtitle">
            Explore our various painting services and view estimates
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-5">
        <div className="container">
          <h2 className="service-category text-center mb-5">
            Residential Painting Services
          </h2>

          <div className="row g-5 mb-5">
            <div className="col-md-4">
              <div className="card service-card h-100 shadow-sm">
                <img
                  src={interior}
                  className="card-img-top"
                  alt="Interior Room"
                />

                <div className="card-body">
                  <p className="card-title-small">
                    Interior Room Painting
                  </p>

                  <Link to="/interior" className="btn page-btn btn-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card service-card h-100 shadow-sm">
                <img
                  src={whole}
                  className="card-img-top"
                  alt="Whole Home Interior"
                />

                <div className="card-body">
                  <p className="card-title-small">
                    Whole Home Interior Painting
                  </p>

                  <Link to="/whole" className="btn page-btn btn-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card service-card h-100 shadow-sm">
                <img
                  src={exterior}
                  className="card-img-top"
                  alt="Exterior House"
                />

                <div className="card-body">
                  <p className="card-title-small">
                    Exterior House Painting
                  </p>

                  <Link to="/exterior" className="btn page-btn btn-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <h2 className="service-category text-center mb-5">
            Commercial Painting Services
          </h2>

          <div className="row g-5">
            <div className="col-md-4">
              <div className="card service-card h-100 shadow-sm">
                <img
                  src={office}
                  className="card-img-top"
                  alt="Office Painting"
                />

                <div className="card-body">
                  <p className="card-title-small">
                    Office Painting
                  </p>

                  <Link to="/office" className="btn page-btn btn-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card service-card h-100 shadow-sm">
                <img
                  src={retail}
                  className="card-img-top"
                  alt="Retail Store"
                />

                <div className="card-body">
                  <p className="card-title-small">
                    Retail Store Painting
                  </p>

                  <Link to="/retail" className="btn page-btn btn-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card service-card h-100 shadow-sm">
                <img
                  src={building}
                  className="card-img-top"
                  alt="Commercial Building"
                />

                <div className="card-body">
                  <p className="card-title-small">
                    Commercial Building Painting
                  </p>

                  <Link to="/building" className="btn page-btn btn-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;