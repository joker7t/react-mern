import React, { Component } from 'react';
import MainSpinner from "../fuctions/MainSpinner";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setIsLoading } from "../../actions/controlAction";
import { setSelectedUser } from "../../actions/userAction";
import axios from "axios";

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
        const { isLoading, selectedUser } = this.props;
        console.log(selectedUser)
        return (
            isLoading === true ? <MainSpinner /> :
                <div>

                </div>
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

