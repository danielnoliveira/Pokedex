import React,{useEffect,useState} from 'react';
import { FaSearchPlus } from "react-icons/fa";
import './App.css';
import api from './services/api';
function App() {
  const [pokemons,setPokemons] = useState([]);
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    async function fillPokemons(){
      var pokemonsList = [];
      for(let i = 1;i<387;i++){
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
      setLoading(false);
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
  function showInfoCard(id){
    document.querySelectorAll('.pokemon__info')[id].classList.toggle('pokemon__info--active');
  }
  function LoadOrShowList(){
    if(loading){
      return (
        <div className="container">
          <div className="container__loading">

          </div>
          <h3 className="container__text">Loading<span>.</span><span>.</span><span>.</span></h3>
        </div>

      );
    }else{
      return (
        <div className="list__pokemon">
          {pokemons.map(pokemon=>{
            return(
              <div key={pokemon.id} className={`pokemon ${pokemon.types[pokemon.types.length-1]["type"]["name"]}`}>
                <img src={pokemon.avatar} alt="pokemon front"/>
                <span className="pokemon__name">{pokemon.name}</span>
                <div className="pokemon__info">
                  <FaSearchPlus className="info__button" onClick={()=>showInfoCard(pokemon.id-1)}/>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }
  return (
    <div className="App">
        <header className="App__header">
          <img src="https://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png" alt="pokemon logo"/>
          <input onChange={(e)=>atualizarLista(e)} className="header__inputSearch" type="text" name="pokemon" placeholder="Pokemon name"/>
        </header>
        <main className="App__list">
          <LoadOrShowList />
        </main>
    </div>
  );
}

export default App;
