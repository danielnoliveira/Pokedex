import React from 'react';
import './PokemonType.css';
export default function PokemonType({types}) {
    return(
        <div className="pokemon__types">
            {types.map((t,index)=>{
                return(
                    <span key={index} className={`${t["type"]["name"]} type`}>{t["type"]["name"]}</span>
                );
            })}
        </div>
    );
}