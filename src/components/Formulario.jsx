import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value: 'ULTIMAS_NOTICIAS', label: 'Últimas Noticias'},
        {value: 'LOCALES', label: 'Locales'},
        {value: 'NACIONALES', label: 'Nacionales'},
        {value: 'INTERNACIONALES', label: 'Internacionales'},
        {value: 'ECONOMIA', label: 'Economía'},
        {value: 'POLITICA', label: 'Política'},
        {value: 'POLICIALES', label: 'Policiales'},
        {value: 'SOCIEDAD', label: 'Sociedad'},
        {value: 'SALUD', label: 'Salud'},
        {value: 'CULTURA', label: 'Cultura'},
        {value: 'DEPORTES', label: 'Deportes'},
        {value: 'TECNOLOGIA', label: 'Tecnología'}
    ]

    //utilizar custom hook
    const [ categoria, SelectNoticias ] = useSelect('ULTIMAS_NOTICIAS', OPCIONES);


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