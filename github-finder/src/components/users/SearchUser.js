import React, { useState } from 'react';
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadUsers } from "../../actions/userAction";
import { setIsLoading } from "../../actions/controlAction";
import classnames from "classnames";

const SearchUser = ({ users, setIsLoading, loadUsers }) => {
    const [searchUser, setSearchUser] = useState('');
    const [isShowAlert, setIsShowAlert] = useState(false);

    const onChange = (e) => {
        setSearchUser(e.target.value);
        if (e.target.value !== '') {
            setIsShowAlert(false);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (searchUser === '') {
            setIsShowAlert(true);
        } else {
            setSearchUser('');
            setIsLoading(true);
            try {
                const res = await axios.get(`https://api.github.com/search/users?q=${searchUser}`);
                loadUsers(res.data.items);
            } catch (error) {
                console.log(error && error.response);
            }
            setIsLoading(false);
        }
    };

    const onClear = async (e) => {
        setSearchUser('');
        loadUsers([]);
    };

    return (
        <React.Fragment>
            {isShowAlert === false ? '' :
                <Alert variant="danger" onClose={() => setIsShowAlert(false)} dismissible>
                    Please enter something
                </Alert>
            }
            <Form onSubmit={onSubmit}>
                <Form.Control
                    className={classnames("form-control form-control-lg", {
                        "is-invalid": isShowAlert
                    })}
                    type="text"
                    placeholder="Enter user..."
                    name="searchUser"
                    value={searchUser}
                    onChange={onChange}
                />

                <Button variant="dark" type="submit" block className="mt-3 button-search">
                    Search
                </Button>
            </Form>

            {users.length === 0 ? '' :
                <Button block className="my-3 button-clear" onClick={onClear}>
                    Clear
                </Button>
            }
        </React.Fragment>
    );
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
