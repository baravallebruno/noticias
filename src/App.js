import React, { Fragment, useState, useEffect } from 'react'
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
import Spinner from './components/Spinner';


function App() {
  
  //definir la categoria y noticias
  const [ categoria, guardarCategoria ] = useState('');
  const [ noticias, guardarNoticias ] = useState([]);
  const [ cargando, guardarCargando ] = useState(false);
  
  useEffect(() => {
    const consultarAPI = async () => {
        const APIKey = '54dd0f90cef7459f8238361316c9f6d3';
        const url=`https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${APIKey}`;

        const respuesta = await fetch(url);
        const noticias = await respuesta.json();

        //mostrar spinner
        guardarCargando(true);

        //guardar noticias
        guardarNoticias(noticias.articles);  
        //ocultar el spinner y mostrar noticias
        setTimeout(() => {
          
        //cambiar estado de cargando
        guardarCargando(false);


        }, 1500);

        
    }

    consultarAPI();
  }, [categoria])

  //mostrar spinner o noticias
  const componente = (cargando) ? <Spinner /> : <ListadoNoticias noticias={noticias} />;

  return (
    <Fragment>
     

      <div className="light-blue darken-3">
        <div className="container">
            <Formulario
                guardarCategoria={guardarCategoria}
            />
          </div>
      </div>

      {componente}

    </Fragment>
  );
}

export default App;
