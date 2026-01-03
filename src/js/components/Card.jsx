import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div className="card h-100 text-center">
            <img 
                src={props.imageUrl} 
                className="card-img-top" 
                alt={props.title} 
                style={{ height: "200px", objectFit: "cover" }} 
            />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer bg-light border-top-0">
                <a href="#" className="btn btn-dark w-100">¡Conóceme más!</a>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string
};

export default Card;