import React from 'react';
import './Pokemon.css';
import PokemonInfo from './PokemonInfo.js';

export default function Pokemon({pokemon,newid}) {
    return (
        <div className={`pokemon ${pokemon.types[pokemon.types.length-1]["type"]["name"]}`}>
            <img src={require(`../images/${pokemon.avatar}`)} alt="pokemon front"/>
            <span className="pokemon__name">{pokemon.name}</span>
            <PokemonInfo newid={newid} types={pokemon.types} height={pokemon.height} weight={pokemon.weight} stats={pokemon.stats}/>
        </div>
    );
}
