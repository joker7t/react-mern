import React from 'react';
import { Card } from "react-bootstrap";

const Repo = ({ repoName }) => {
    return (
        <div>
            <Card className="my-2 p-2 repo-item">
                {repoName}
            </Card>
        </div>
    );
}

export default Repo;
