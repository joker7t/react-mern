import React from 'react';
import { Card, Image, Button } from "react-bootstrap";

const UserItem = props => {

    const { login, avatar_url, html_url } = props.user;

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

export default UserItem;
