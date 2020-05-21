import React from 'react';
import './PokemonStats.css';
import Stat from './Stat';
export default function PokemonStats({stats}) {
    return(
        <div className="pokemon__stats">
            {stats.map((stat,index)=>{
                return (<Stat key={index} stat={stat}/>);
            })}
        </div>
    );
}