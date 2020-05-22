import React, { useState } from 'react';
import { Card, Image, Button } from "react-bootstrap";
import MainSpinner from "../fuctions/MainSpinner";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSelectedUser } from "../../actions/userAction";
import { Link } from "react-router-dom";
import { USER_PATH } from "../../utils/constant";

const UserItem = props => {

    const { login, avatar_url } = props.user;
    const [isLoading, setIsLoading] = useState(false);

    return (
        isLoading === true ? <MainSpinner /> :
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
                    <Button
                        as={Link}
                        to={USER_PATH}
                        variant="dark"
                        className="py-1">
                        More
                </Button>
                </Card.Body>
            </Card>
    );
}

UserItem.propTypes = {
    loadUsers: PropTypes.func.isRequired
};

export default connect(null, { getSelectedUser })(UserItem);
