import React from 'react';
import { Card, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { USER_PATH } from "../../utils/constant";

const UserItem = ({ user }) => {
    const { login, avatar_url } = user;

    return (
        <Card className="text-center pt-2 user-item">
            <Image
                variant="top"
                src={avatar_url}
                roundedCircle
                fluid
                className="user-img mx-auto"
            />
            <Card.Body>
                <h3>{login}</h3>
                <Button
                    as={Link}
                    to={{
                        pathname: USER_PATH,
                        username: login
                    }}
                    className="py-1 user-item-button">
                    More
                </Button>
            </Card.Body>
        </Card>
    );
}

export default UserItem;
