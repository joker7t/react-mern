import React, { Component } from 'react';
import { Card } from "react-bootstrap";

class Repo extends Component {
    render() {
        const { repoName } = this.props;
        return (
            <div>
                <Card className="my-2 p-2 repo-item">
                    {repoName}
                </Card>
            </div>
        );
    }
}

export default Repo;
