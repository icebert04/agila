import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/room-2.jpeg';
import PropTypes from 'prop-types';

export default function Property({property}) {
 const{name,slug,images,price} = property


    return (
        <article className="property">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single"/>
                <div className="price-top">
                    <h6>₱{price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/properties/${slug}`} className="btn-primary property-link" >
                    Features
                </Link>
            </div>
            <p className="property-info">{name}</p>
        </article>
    );
}

Property.propTypes = {
    property:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired
    })
}