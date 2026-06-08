import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
            <div className="container">

                <NavLink
                    to="/"
                    className="navbar-brand nav-title"
                >
                    All-Colours
                </NavLink>

                <div className="ms-auto d-flex gap-2">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? 'nav-link-custom active-link'
                                : 'nav-link-custom'
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            isActive
                                ? 'nav-link-custom active-link'
                                : 'nav-link-custom'
                        }
                    >
                        Services
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? 'nav-link-custom active-link'
                                : 'nav-link-custom'
                        }
                    >
                        Contact
                    </NavLink>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;