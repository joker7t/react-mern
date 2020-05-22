import React, { Component } from 'react';
import Users from './users/Users';
import { Container } from "react-bootstrap";
import SearchUser from './users/SearchUser';

class Landing extends Component {

    render() {
        return (
            <Container>
                <SearchUser />
                <Users />

            </Container>
        );
    }
}

export default Landing;
