import React, { useEffect } from 'react';
import UserItem from './UserItem';
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import MainSpinner from "../fuctions/MainSpinner";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadUsers } from "../../actions/userAction";
import { setIsLoading } from "../../actions/controlAction";
import auth from "../../utils/auth";

const Users = ({ users, isLoading, setIsLoading, loadUsers }) => {

    const showItemsPerRow = (row, i) => {
        return <Row className="my-2" key={i}>
            {row.map((item, i2) => {
                return <Col className="my-2 user-item__animated" key={i2} md={4}>
                    <UserItem user={item} />
                </Col>
            })}
        </Row>;
    }

    const buildItemsForRow = (maxItemsInARow, items) => {
        const tempItems = [...items];
        const rowsOfItems = [];

        while (tempItems.length > 0) {
            rowsOfItems.push(tempItems.splice(0, maxItemsInARow));
        }

        return rowsOfItems.map((row, i) => showItemsPerRow(row, i));
    }

    useEffect(() => {
        const loadData = async () => {
            if (users.length === 0) {
                setIsLoading(true);
                try {
                    const res = await axios.get(`https://api.github.com/users?client_id=${auth.clientId}&client_secret=${auth.clientSecret}`);
                    loadUsers(res.data);
                } catch (error) {
                    console.log(error && error.response);
                }
                setIsLoading(false);
            }
        }
        loadData();

        // eslint-disable-next-line
    }, []);

    return isLoading ? <MainSpinner /> : (
        <div>
            {buildItemsForRow(3, users)}
        </div>
    );
}

Users.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    setIsLoading: PropTypes.func.isRequired,
    loadUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    isLoading: state.control.isLoading,
    users: state.user.users
});

export default connect(mapStateToProps, { loadUsers, setIsLoading })(Users);
