import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";


class MainNav extends Component {
    static defaultProps = {
        icon: "fa fa-github",
        title: "Github Finder"
    }

    render() {
        const { title, icon } = this.props;

        return (
            <div>
                <Navbar bg="primary" expand="lg" variant="dark">
                    <Navbar.Brand href="#home">
                        <i className={icon} /> {title}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

MainNav.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default MainNav;
