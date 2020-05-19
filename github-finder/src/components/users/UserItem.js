import React, { Component } from 'react';
import { Card, Image, Button } from "react-bootstrap";

class UserItem extends Component {
    state = {
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
    }

    render() {
        const { login, avatar_url, html_url } = this.props.user;

        return (
            <Card className="text-center p-1">
                <Image
                    variant="top"
                    src={avatar_url}
                    roundedCircle
                    fluid
                    className="user-img mx-auto"
                />
                <Card.Body>
                    <h3>{login}</h3>
                    <Button href={html_url} variant="dark" className="py-1">More</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default UserItem;
