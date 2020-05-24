import React, { Component } from 'react';
import MainSpinner from "../fuctions/MainSpinner";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setIsLoading } from "../../actions/controlAction";
import { setSelectedUser } from "../../actions/userAction";
import axios from "axios";
import { Container, Button, Card, Image, Row, Col, Badge } from "react-bootstrap";
import { HOME_PATH } from "../../utils/constant";
import { Link } from "react-router-dom";

class User extends Component {

    async componentDidMount() {
        const { username } = this.props.location;
        if (username === undefined) {
            this.props.history.push("/");
        }
        else {
            const { setIsLoading, setSelectedUser } = this.props;
            setIsLoading(true);
            try {
                const res = await axios.get(`https://api.github.com/users/${username}`);
                setSelectedUser(res.data);
            } catch (error) {
                console.log(error.response.data);
            }
            setIsLoading(false);
        }
    }

    render() {
        const { isLoading } = this.props;
        const { hireable, avatar_url, login, bio, html_url, company, blog, followers, following, public_repos, public_gists } = this.props.selectedUser;
        return (
            isLoading === true ? <MainSpinner /> :
                <Container>
                    <div className="block">
                        <Button variant="dark" as={Link} to={HOME_PATH}>Back</Button>
                    </div>
                    Hireable:{' '}
                    {hireable === true ?
                        <i className="fa fa-check text-success" /> :
                        <i className="fa fa-times-circle text-danger" />
                    }
                    <Card className="text-center p-1">
                        <Row className="mt-2">
                            <Col md={6}>
                                <Image
                                    variant="top"
                                    src={avatar_url}
                                    roundedCircle
                                    fluid
                                    className="mx-auto"
                                    style={{ width: "150px" }}
                                />
                                <Card.Body>
                                    <h3>{login}</h3>

                                </Card.Body>
                            </Col>

                            <Col md={6}>
                                <h3>Bio</h3>
                                {bio === null ? <p>Blank</p> : <p>{bio}</p>}
                                <Button variant="dark" href={html_url}>Visit Github Profile</Button>
                                <ul style={{ listStyle: "none", paddingLeft: "0px" }} className="mt-2">
                                    <li>Username: {login}</li>
                                    {company && <li>Company: {company}</li>}
                                    {blog && <li>Website: {blog}</li>}
                                </ul>
                            </Col>
                        </Row>
                    </Card>

                    <Card className="text-center p-1 mt-2">
                        <Card.Body>
                            <Badge variant="primary" className="mx-1">Followers: {followers}</Badge>
                            <Badge variant="success" className="mx-1">Following: {following}</Badge>
                            <Badge variant="danger" className="mx-1">Public Repos: {public_repos}</Badge>
                            <Badge variant="warning" className="mx-1">Public Gits: {public_gists}</Badge>
                        </Card.Body>

                    </Card>
                </Container>
        );
    }
}

User.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    setIsLoading: PropTypes.func.isRequired,
    selectedUser: PropTypes.object.isRequired,
    setSelectedUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    isLoading: state.control.isLoading,
    selectedUser: state.user.selectedUser
});

export default connect(mapStateToProps, { setSelectedUser, setIsLoading })(User);

