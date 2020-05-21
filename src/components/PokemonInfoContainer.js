import React from 'react';
import './PokemonInfoContainer.css';
import PokemonType from './PokemonType';
import PokemonStats from './PokemonStats';
import SecondaryStats from './SecondaryStats';
export default function PokemonInfoContainer({types,stats,weight,height}) {
    return (
        <div className="info__container">
            <PokemonType types={types}/>
            <PokemonStats stats={stats}/>
            <SecondaryStats height={height} weight={weight}/>
        </div>
    );
}