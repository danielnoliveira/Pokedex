import React from 'react';
import Pokemon from './Pokemon';
import './PokemonList.css';
export default function PokemonList({pokemons}) {
    return(
        <div className="list__pokemon">
          {pokemons.map((pokemon,index)=>{
            return(
              <Pokemon key={index} newid={index} pokemon={pokemon}/>
            );
          })}
        </div>
    );
}
