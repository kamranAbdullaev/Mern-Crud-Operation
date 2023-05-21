import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const NavBar = ({ routes }) => {
    const location = useLocation().pathname;

    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-primary'>
            <div className='container-fluid'>
                <NavLink className='navbar-brand' to='/'>
                    Qualities
                </NavLink>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <div className='navbar-nav'>
                        {routes.map((prop, key) => {
                            if (prop.display !== false) {
                                return (
                                    <NavLink
                                        to={prop.path}
                                        key={key}
                                        className={
                                            "nav-link" +
                                            (prop.path === location
                                                ? " active"
                                                : "")
                                        }
                                    >
                                        {prop.name}
                                    </NavLink>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
