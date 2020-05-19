import React,{useEffect,useState} from 'react';
import {} from '@fortawesome/fontawesome-free';
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
  function infoCard(id){
    document.querySelectorAll(".pokeball")[id].classList.toggle('pokeball--active');
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
                  <span className="pokemon__name">{pokemon.name}</span>
                  <div className="pokemon__types">
                  {pokemon.types.map((t,index)=>{
                    return(
                      <span key={index} className={`${t["type"]["name"]} type`}>{t["type"]["name"]}</span>
                    );
                  })}
                  </div>
                  <div className="pokeball" onClick={()=>infoCard(pokemon.id-1)}>
                    <div className="pokeball__header"></div>
                    <div className="pokeball__button"></div>
                    <div className="pokeball__footer"></div>
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
