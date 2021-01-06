import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'}
    ]

    //utilizar custom hook
    const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);


    //submit al form, pasar categoria a app.jsx
    const buscarNoticias = e => {
        e.preventDefault();
        guardarCategoria(categoria);
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                   <h2 className={styles.heading}>Busca Noticias por Categoría</h2> 

                    <SelectNoticias/>

                    <div className="input-field col s12">
                        <button 
                            type="submit"
                            className={`${styles.btn_block} waves-effect waves-light btn-large pink accent-3`}
                        >Buscar Noticias</button>
                    </div>
                </form>
            </div>     
        </div>
    );
};

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}

export default Formulario;