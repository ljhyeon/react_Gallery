import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Galleries.css';

import cascais from './images/cascais.jpeg';
import nice from './images/nice.jpeg';
import porto from './images/porto.jpeg';

const Galleries = () => {
    const navigate = useNavigate();

    const handleClick = (image, title, date) => {
        navigate('/info', { state: { image, title, date } });
    };

    return (
        <div>
            <div className="image-box">
                <img
                    src={cascais}
                    alt="카스카이스"
                    onClick={() => handleClick(cascais, "카스카이스", "240707")}
                />
            </div>
            <div className="image-box">
                <img
                    src={nice}
                    alt="니스"
                    onClick={() => handleClick(nice, "니스", "240619")}
                />
            </div>
            <div className="image-box">
                <img
                    src={porto}
                    alt="포르투"
                    onClick={() => handleClick(porto, "포르투", "240525")}
                />
            </div>
        </div>
    );
};

export default Galleries;
