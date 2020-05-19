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

    render() {
        const { searchUser } = this.state;

        return (
            <Form className="m-2" onSubmit={this.onSubmit}>
                <Form.Control
                    type="text"
                    placeholder="Enter user"
                    name="searchUser"
                    value={searchUser}
                    onChange={this.onChange}
                />

                <Button variant="dark" type="submit" block className="mt-1">
                    Search
                </Button>
            </Form>
        );
    }
}

SearchUser.propTypes = {
    loadUsers: PropTypes.func.isRequired
};

export default connect(null, { loadUsers })(SearchUser);
