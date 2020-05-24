import React from 'react';
import { Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const MainNav = props => {

    const { title, icon } = props;

    return (
        <div>
            <Navbar bg="primary" expand="lg" variant="dark" fixed="top">
                <Navbar.Brand as={Link} to="/">
                    <i className={icon} /> {title}
                </Navbar.Brand>
            </Navbar>
        </div>
    );
}

MainNav.defaultProps = {
    icon: "fa fa-github",
    title: "Github Finder"
}

MainNav.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default MainNav;
