import React, { Component } from 'react';
import UserItem from './UserItem';
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import MainSpinner from "../fuctions/MainSpinner";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadUsers } from "../../actions/userAction";

class Users extends Component {

    showItemsPerRow = (row, i) => {
        return <Row className="my-2" key={i}>
            {row.map((item, i2) => {
                return <Col className="my-2" key={i2}>
                    <UserItem user={item} />
                </Col>
            })}
        </Row>;
    }

    buildItemsForRow = (maxItemsInARow, items) => {
        const tempItems = [...items];
        const rowsOfItems = [];

        while (tempItems.length > 0) {
            rowsOfItems.push(tempItems.splice(0, maxItemsInARow));
        }

        return rowsOfItems.map((row, i) => this.showItemsPerRow(row, i));
    }

    async componentDidMount() {
        const { setIsloading, loadUsers } = this.props;
        try {
            const res = await axios.get("https://api.github.com/users");
            loadUsers(res.data);
            console.log(res);
        } catch (error) {
            console.log(error.response.data);
        }
        setIsloading(false);

    }

    render() {
        const { users, isLoading } = this.props;

        return isLoading ? <MainSpinner /> : (
            <div>
                {this.buildItemsForRow(3, users)}
            </div>
        );
    }
}

Users.propTypes = {
    loadUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    users: state.user.users
});

export default connect(mapStateToProps, { loadUsers })(Users);
