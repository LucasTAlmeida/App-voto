import React, { useEffect, useState } from "react";

import api from "../../services/api";

import "./styles.css";


export default function Resultados(){

    const [pergunta , setPergunta] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("@token:voto");
        console.log(token);
        if (token) {
            api
                .get("/pergunta", {
                  headers: {
                    Authorization:`Bearer ${token}`,
                },
            })
            .then((response) => setPergunta(response.data));
        }
    }, []);

    return (
        <div className="container">
            <h3>Respostas Obtidas</h3>   
            <table> 
            
                <thead> 
                        <th>Usuario</th>
                        <th>Voto</th>
                    
                </thead>
                <tbody>  
                    {pergunta.map((resposta) => {
                        return (
                    <tr key={pergunta._id}>
                        <tr>{pergunta.value}</tr>                          
                    </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}