import React from 'react';
import './Galleries.css';

const Galleries = () => {
    return (
        <div>
            <div className="image-box">
                <img src = {require("./images/cascais.jpeg")} alt="카스카이스" />
            </div>
            <div className="image-box">
                <img src={require("./images/nice.jpeg")} alt="니스" />
            </div>
            <div className="image-box">
                <img src={require("./images/porto.jpeg")} alt="포트토" />
            </div>
        </div>
    );
}

export default Galleries;