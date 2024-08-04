import React, {useState} from 'react';
import './Galleries.css';
import Info from './Info';

const Galleries = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    if (selectedImage) {
        return <Info image={selectedImage.image} title={selectedImage.title} date={selectedImage.date} />;
    }

    return (
        <div>
            <div className="image-box">
                <img
                src = {require("./images/cascais.jpeg")} alt="카스카이스"
                onClick={() => {
                    setSelectedImage({
                        image: require("./images/cascais.jpeg"),
                        title: "카스카이스",
                        date: "240707"
                    });
                }}
                />
            </div>
            <div className="image-box">
                <img src={require("./images/nice.jpeg")} alt="니스" 
                onClick={() => {
                    setSelectedImage({
                        image: "./images/nice.jpeg",
                        title: "니스",
                        date: "240619"
                    });
                }}
                />
            </div>
            <div className="image-box">
                <img src={require("./images/porto.jpeg")} alt="포트토" 
                onClick={() => {
                    setSelectedImage({
                        image: "./images/porto.jpeg",
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