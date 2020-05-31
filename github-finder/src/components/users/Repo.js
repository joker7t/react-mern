import React, { useRef, useEffect } from 'react';
import { Card } from "react-bootstrap";
import { TweenLite, Linear } from "gsap";

const Repo = ({ repoName, delayTime }) => {
    const repoRef = useRef(null);

    useEffect(() => {
        TweenLite.fromTo(repoRef.current, 0.3,
            { x: -100 },
            { x: 0, ease: Linear.easeNone }
        );

        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <Card className="my-2 p-2 repo-item" ref={repoRef}>
                {repoName}
            </Card>
        </div>
    );
}

export default Repo;
