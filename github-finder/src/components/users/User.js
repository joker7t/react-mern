import React, { Component } from 'react';
import MainSpinner from "../fuctions/MainSpinner";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setIsLoading } from "../../actions/controlAction";
import { setSelectedUser } from "../../actions/userAction";
import { loadRepo } from "../../actions/repoAction";
import axios from "axios";
import { Container, Button, Card, Image, Row, Col, Badge } from "react-bootstrap";
import { HOME_PATH } from "../../utils/constant";
import { Link } from "react-router-dom";
import Repo from './Repo';

class User extends Component {

    loadData = async (username) => {
        const { setIsLoading, setSelectedUser, loadRepo } = this.props;
        setIsLoading(true);

        try {
            const resUser = await axios.get(`https://api.github.com/users/${username}`);
            setSelectedUser(resUser.data);

            const resRepo = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
            loadRepo(resRepo.data);
        } catch (error) {
            console.log(error.response.data);
        }

        setIsLoading(false);
    }

    showRepos = (repos) =>
        repos.map((repo, i) => <Repo key={i} repoName={repo.full_name} />);


    async componentDidMount() {
        const { username } = this.props.location;
        if (username === undefined) {
            this.props.history.push("/");
        }
        else {
            this.loadData(username);
        }
    }

    render() {
        const { isLoading, repos } = this.props;
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

                    <div className="mt-2">
                        {this.showRepos(repos)}
                    </div>

                </Container>
        );
    }
}

User.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    setIsLoading: PropTypes.func.isRequired,
    selectedUser: PropTypes.object.isRequired,
    setSelectedUser: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    loadRepo: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    isLoading: state.control.isLoading,
    selectedUser: state.user.selectedUser,
    repos: state.repo.repos
});

export default connect(mapStateToProps, { setSelectedUser, setIsLoading, loadRepo })(User);

