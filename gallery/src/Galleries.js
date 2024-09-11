import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Galleries.css';
import { usePhotos } from './PhotoContext';

const Galleries = () => {
    const navigate = useNavigate();

    const { photos } = usePhotos(); // Context에서 photos 가져오기

    const handleClick = (image, title, date) => {
        navigate('/info', { state: { image, title, date } });
    };

    return (
        <div>
            <button onClick = {()=>navigate('/add')}>사진 추가하기</button>
            {photos.map((photo, index) => (
                <div key={index} className="image-box">
                    <img
                        src={photo.imageSrc}
                        alt={photo.title}
                        onClick={() => handleClick(photo.imageSrc, photo.title, photo.date)}
                    />
                </div>
            ))}
        </div>
    );
};

export default Galleries;
