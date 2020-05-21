import React from 'react';
import './PokemonInfoContainer.css';
import PokemonType from './PokemonType.js';
import PokemonStats from './PokemonStats.js';
import SecondaryStats from './SecondaryStats.js';
export default function PokemonInfoContainer({types,stats,weight,height}) {
    return (
        <div className="info__container">
            <PokemonType types={types}/>
            <PokemonStats stats={stats}/>
            <SecondaryStats height={height} weight={weight}/>
        </div>
    );
}