import React, {useState} from 'react';
import './Galleries.css';
import Info from './Info';

import cascais from './images/cascais.jpeg'
import nice from './images/nice.jpeg'
import porto from './images/porto.jpeg'

const Galleries = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    if (selectedImage) {
        return <Info image={selectedImage.image} title={selectedImage.title} date={selectedImage.date} />;
    }

    return (
        <div>
            <div className="image-box">
                <img
                src = {cascais} alt="카스카이스"
                onClick={() => {
                    setSelectedImage({
                        image: cascais,
                        title: "카스카이스",
                        date: "240707"
                    });
                }}
                />
            </div>
            <div className="image-box">
                <img
                src = {nice} alt="니스" 
                onClick={() => {
                    setSelectedImage({
                        image: nice,
                        title: "니스",
                        date: "240619"
                    });
                }}
                />
            </div>
            <div className="image-box">
                <img 
                src={porto} alt="포트토" 
                onClick={() => {
                    setSelectedImage({
                        image: porto,
                        title: "포르투",
                        date: "240525"
                    });
                }}
                />
            </div>
        </div>
    );
}

export default Galleries;