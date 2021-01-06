import React, { useState } from 'react';
import '../components/Select.css';

const useSelect = (stateInicial, opciones) => {
    
    const [ state, actualizarState ] = useState(stateInicial);

    const SelectNoticias = () => (
    
       <div className="content-select">
           <select
                className="browser-default"
                value={state}
                onChange={e => actualizarState(e.target.value)  }
           >

               {opciones.map(opcion => (
                   <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
               ))}
                
           </select>
           <i></i>
        </div>

    );
    
    return [ state, SelectNoticias ];

};

export default useSelect;