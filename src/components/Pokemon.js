import React from 'react';
import './Pokemon.css';
import PokemonInfo from './PokemonInfo.js';

export default function Pokemon({pokemon}) {
    return (
        <div className={`pokemon ${pokemon.types[pokemon.types.length-1]["type"]["name"]}`}>
            <img src={require(`../images/${pokemon.avatar}`)} alt="pokemon front"/>
            <span className="pokemon__name">{pokemon.name}</span>
            <PokemonInfo id={pokemon.id} types={pokemon.types} height={pokemon.height} weight={pokemon.weight} stats={pokemon.stats}/>
        </div>
    );
}