import React, { Component } from 'react';
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadUsers } from "../../actions/userAction";
import { setIsLoading } from "../../actions/controlAction";

class SearchUser extends Component {
    state = {
        searchUser: "",
        isShowAlert: false
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.value !== "") {
            this.setState({ isShowAlert: false });
        }
    };

    onSubmit = async (e) => {
        e.preventDefault();
        const { searchUser } = this.state;
        if (searchUser === "") {
            this.setState({ isShowAlert: true });
        } else {
            this.setState({ searchUser: "" });
            const { setIsLoading, loadUsers } = this.props;

            setIsLoading(true);
            try {
                const res = await axios.get(`https://api.github.com/search/users?q=${searchUser}`);
                loadUsers(res.data.items);
                console.log(res);
            } catch (error) {
                console.log(error.response.data);
            }
            setIsLoading(false);
        }
    };

    onClear = async (e) => {
        this.setState({ searchUser: "" });
        const { loadUsers } = this.props;
        loadUsers([]);
    };

    render() {
        const { searchUser, isShowAlert } = this.state;
        const { users } = this.props;

        return (
            <React.Fragment>
                {isShowAlert === false ? "" :
                    <Alert variant="danger" onClose={() => this.setState({ isShowAlert: false })} dismissible>
                        Please enter something
                    </Alert>
                }
                <Form onSubmit={this.onSubmit}>
                    <Form.Control
                        type="text"
                        placeholder="Enter user"
                        name="searchUser"
                        value={searchUser}
                        onChange={this.onChange}
                    />

                    <Button variant="dark" type="submit" block className="mt-3">
                        Search
                    </Button>
                </Form>

                {users.length === 0 ? "" :
                    <Button variant="outline-dark" block className="my-3" onClick={this.onClear}>
                        Clear
                    </Button>
                }
            </React.Fragment>
        );
    }
}

SearchUser.propTypes = {
    setIsLoading: PropTypes.func.isRequired,
    loadUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    users: state.user.users
});

export default connect(mapStateToProps, { loadUsers, setIsLoading })(SearchUser);
