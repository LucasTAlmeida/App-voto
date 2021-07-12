import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";


import "./styles.css";

import { AuthContext } from '../context/AuthContext';


function Pergunta(){
    const history = useHistory();
    const { authentication } = useContext(AuthContext);
    const [resposta, setResposta] = useState({});

    function handleChange(e){
        //e.target.name
        setResposta({
            ...resposta,
            [e.target.name]: e.target.value,});
    }

    function handleSubmit(e){
        e.preventDefault();
        //mandar inf para o back
        authentication(resposta);
        // encamminha apos logar para stado / que é Homne
        history.push("/resultados");
    }

   return (
       
       <div className ="container">
        <form onSubmit={handleSubmit}>
            <h2>Pergunta</h2>
            <h3>Você gosta de responder questionarios?</h3>
            
            <label className = "row">
            <button value="sim" onClick={handleChange}>Sim</button>
            </label>

            <label className = "row">
            <button value="não" onClick={handleChange}>Não</button>                  
            </label>

            <label className = "row">
                <button value="as vezes" onClick={handleChange}>As vezes</button>
            </label>
        </form>
       </div> 
   );
}
export default Pergunta;