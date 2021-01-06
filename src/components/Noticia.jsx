import React from 'react';
import PropTypes from 'prop-types';

import './Noticia.css';

const Noticia = ({noticia}) => {

    //extraer los datos

    const { imageUrl, sourceUrl, title, description, provider } = noticia;

    const imagen = (imageUrl) ? 
        <div className="card-image">
            <img src={imageUrl} alt={title}/>
            <span className="card-title">{provider.scope} - <small>{provider.name}</small> </span>
        </div>
    :null;

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                
                {imagen}

                <div className="card-content">
                    <h5>{title}</h5>
                    <p>
                        {description}
                    </p>
                </div>
                <div className="card-action">
                     <a 
                        className="waves-effect waves-light btn-large btn_block pink accent-3" 
                        href={sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                     >Ver noticia</a>
                </div>
            </div>
        </div>
    );
};

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia;