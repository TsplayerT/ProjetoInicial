import React from 'react'
import { useState } from 'react';
import { Button } from "react-bootstrap";

export default function Page() {
  const [message, setMessage] = useState("teste");

  return (
    <div>
      <Button variant="danger" className="botao" onClick={() => {
        alert(message);
        console.log(message);
      }}>
        Exibir
      </Button>
      <Button onClick={() => setMessage("Helo World!")}>
        Trocar
      </Button>
    </div>
  );
}