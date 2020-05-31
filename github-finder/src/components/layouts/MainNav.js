import React, { useRef, useEffect } from 'react';
import { Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ReactComponent as CogLeft } from "../../img/cog-left.svg";
import { TweenLite, Linear } from "gsap";


const MainNav = ({ title, icon }) => {
    const cogLeftRef = useRef(null);

    useEffect(() => {

        //rotating cogs
        TweenLite.to(
            cogLeftRef.current,
            8,
            { rotation: 360, repeat: -1, ease: Linear.easeNone }
        );

        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <Navbar bg="primary" expand="lg" fixed="top" variant="dark">
                <Navbar.Brand as={Link} to="/">
                    <i className={icon} style={{ transform: 'scale(1.5)', marginRight: '0.5rem' }} /> {title}
                </Navbar.Brand>
                <div className="ml-auto" style={{ width: '40px' }} ref={cogLeftRef}>
                    <CogLeft />
                </div>
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
