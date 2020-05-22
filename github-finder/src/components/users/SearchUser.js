import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadUsers } from "../../actions/userAction";

class SearchUser extends Component {
    state = {
        searchUser: ""
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = async (e) => {
        e.preventDefault();
        this.setState({ searchUser: "" });
        const { setIsloading, loadUsers } = this.props;
        const { searchUser } = this.state;
        setIsloading(true);
        try {
            const res = await axios.get(`https://api.github.com/search/users?q=${searchUser}`);
            loadUsers(res.data.items);
            console.log(res);
        } catch (error) {
            console.log(error.response.data);
        }
        setIsloading(false);
    };

    onClear = async (e) => {
        this.setState({ searchUser: "" });
        const { loadUsers } = this.props;
        loadUsers([]);
    };

    render() {
        const { searchUser } = this.state;
        const { users } = this.props;

        return (
            <div>
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
            </div>
        );
    }
}

SearchUser.propTypes = {
    loadUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    users: state.user.users
});

export default connect(mapStateToProps, { loadUsers })(SearchUser);
