import React from "react";

const Info = ({image, title, date}) => {
    return (
        <div>
            <img src={image} alt={image} />
            <h1>{title}</h1>
            <div>{date}</div>
        </div>
    );
}

export default Info;