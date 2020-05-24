import React from 'react';
import Users from './users/Users';
import { Container } from "react-bootstrap";
import SearchUser from './users/SearchUser';

const Landing = () => {
    return (
        <Container>
            <SearchUser />
            <Users />

        </Container>
    );
}

export default Landing;
