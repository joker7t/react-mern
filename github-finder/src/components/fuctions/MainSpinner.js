import React from 'react';
import { Spinner } from "react-bootstrap";

const MainSpinner = () => {
    return (
        <div className="main-spinner-container">
            <Spinner animation="border" className="main-spinner" />
        </div>

    );
}

export default MainSpinner;
