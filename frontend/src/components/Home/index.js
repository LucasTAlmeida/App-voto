import React, { useEffect, useState } from "react";

//import api from "../../services/api";

import "./styles.css";


const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: "Teste a escolha!"
  },
  {
    emoji: '🎉',
    name: "Acerte a resposta!"
  },
  {
    emoji: '💃',
    name: "Acerte o maior numero de respostas em menor tempo!"
  }
];



export default function Home(){

 /*   const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("@token:voto");
        console.log(token);
        if (token) {
            api
                .get("/users", {
                  headers: {
                    Authorization:`Bearer ${token}`,
                },
            })
            .then((response) => setUsuarios(response.data));
        }
    }, []);

    */
    const greeting = "greeting";
    return(
      <div className="container">
        <h1 id={greeting}>Questionario Simples</h1>
        <p></p>
        <ul>
          {
            emojis.map(emoji => (
              <li key={emoji.name}>
                <button
                  onClick={displayEmojiName}
                >
                  <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
