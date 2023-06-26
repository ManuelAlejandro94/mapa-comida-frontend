import React from "react";
import './letrasneon.css';

const LetrasNeon = ({ texto }) => {
    return (
        <h1 className="neonText">{texto}</h1>
    );
}

export default LetrasNeon;