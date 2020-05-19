import React, { Component } from 'react';
import Users from './users/Users';
import { Container } from "react-bootstrap";

class Landing extends Component {

    render() {
        return (
            <Container>
                <Users />

            </Container>
        );
    }
}

export default Landing;
