import React, { Component } from 'react';
import Users from './users/Users';
import { Container } from "react-bootstrap";
import SearchUser from './users/SearchUser';

class Landing extends Component {

    state = {
        isLoading: true
    }

    setIsloading = newIsLoading => {
        this.setState({ isLoading: newIsLoading });
    }

    render() {
        const { isLoading } = this.state;
        return (
            <Container>
                <SearchUser isLoading={isLoading} setIsloading={this.setIsloading} />
                <Users isLoading={isLoading} setIsloading={this.setIsloading} />

            </Container>
        );
    }
}

export default Landing;
