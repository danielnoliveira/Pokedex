import React,{useEffect,useState} from 'react';

import './App.css';
import api from './services/api';
function App() {
  const [pokemons,setPokemons] = useState([]);
  const [data,setData] = useState([]);
  useEffect(()=>{
    async function fillPokemons(){
      var pokemonsList = [];
      for(let i = 1;i<152;i++){
        const {data} = await api.get(`pokemon/${i}`);
        pokemonsList.push({
          id:i,
          name:data.name,
          stats:data.stats,
          avatar:data.sprites.front_default,
          types:data.types,
          weight:data.weight,
          height:data.height
        });
      }
      setPokemons([...pokemonsList]);
      setData([...pokemonsList]);
    }
    fillPokemons();
  },[]);
  function atualizarLista(e){
    setPokemons([...data.filter((pokemon)=>{
      return pokemon.name.includes(e.target.value);
    })]);
  }
  return (
    <div className="App">
        <header className="App__header">
          <img src="https://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png" alt="pokemon logo"/>
          <input onChange={(e)=>atualizarLista(e)} className="header__inputSearch" type="text" name="pokemon" placeholder="Pokemon name"/>
        </header>
        <main className="App__list">
          <div className="list__pokemon">
            {pokemons.map(pokemon=>{
              return(
                <div key={pokemon.id} className={`pokemon ${pokemon.types[pokemon.types.length-1]["type"]["name"]}`}>
                  <img src={pokemon.avatar} alt="pokemon front"/>
                  <span>{pokemon.name}</span>
                  <div className="pokemon__types">
                  {pokemon.types.map(t=>{
                    return(
                      <span className={`${t["type"]["name"]} type`}>{t["type"]["name"]}</span>
                    );
                  })}
                  </div>
                </div>
              );
            })}
          </div>
        </main>
    </div>
  );
}

export default App;
