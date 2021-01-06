import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';

import './Galeria.css';

const ListadoNoticias = ({noticias}) => {
    return (

        <div id="galeria">
            {noticias.map(noticia =>(
               <Noticia 
                    key={noticia.url}
                    noticia={noticia}
               /> 
            ))}
        </div>
    );
};

ListadoNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}

export default ListadoNoticias;