import React, { Component } from 'react';
import MainSpinner from "../fuctions/MainSpinner";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class User extends Component {

    render() {
        const { selectedUser } = this.props;
        console.log(selectedUser);
        return (
            <div>

            </div>
        );
    }
}

User.propTypes = {
    selectedUser: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    users: state.user.selectedUser
});

export default connect(mapStateToProps, {})(User);

