import React, { Component } from 'react';
import UserItem from './UserItem';
import { Row, Col } from "react-bootstrap";
import axios from "axios";

class Users extends Component {
    state = {
        data: []
    }

    showItemsPerRow = (row, i) => {
        return <Row className="my-2" key={i}>
            {row.map((item, i2) => {
                return <Col className="m-2" key={i2}>
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
        try {
            const res = await axios.get("https://api.github.com/users");
            this.setState({ data: res.data });
            console.log(res);
        } catch (error) {
            console.log(error.response.data);
        }

    }

    render() {
        const { data } = this.state;

        return (
            <div>
                {this.buildItemsForRow(3, data)}
            </div>
        );
    }
}

export default Users;
