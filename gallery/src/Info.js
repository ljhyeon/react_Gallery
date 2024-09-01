import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Info = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { image, title, date } = location.state || {};

    return (
        <div>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <div>{date}</div>
            <button onClick={()=>navigate('/')}>갤러리로 이동</button>
        </div>
    );
};

export default Info;
