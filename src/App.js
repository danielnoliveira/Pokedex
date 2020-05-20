import React,{useEffect,useState} from 'react';
import { FaSearchPlus} from "react-icons/fa";
import {AiFillCloseCircle} from 'react-icons/ai';
import './App.css';
import api from './services/api';
function App() {
  const [pokemons,setPokemons] = useState([]);
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    async function fillPokemons(){
      var pokemonsList = [];
      for(let i = 1;i<494;i++){
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
    document.querySelectorAll('.info__buttonExit')[id].classList.toggle('info__buttonExit--active');
    document.querySelectorAll('.info__button')[id].classList.toggle('info__button--active');
    const divInfo = document.querySelectorAll('.info__container')[id];
    if(!divInfo.classList.contains('info__container--active')){
      setTimeout(()=>{
        divInfo.classList.toggle('info__container--active');
      },600);
    }else{
      divInfo.classList.toggle('info__container--active');
    }
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
                  <AiFillCloseCircle className="info__buttonExit" onClick={()=>showInfoCard(pokemon.id-1)}/>
                  <div className="info__container">
                    <div className="pokemon__types">
                      {pokemon.types.map((t,index)=>{
                        return(
                          <span key={index} className={`${t["type"]["name"]} type`}>{t["type"]["name"]}</span>
                        );
                      })}
                    </div>
                    <div className="pokemon__stats">
                        {pokemon.stats.map((stat,index)=>{
                          return (
                            <div className="stat" key={index}>
                              <span className="stat__title">{stat.stat.name}</span>
                              <div className="stat__bar">
                                <div className="bar" style={{width:(stat.base_stat/255)*100}}></div>  
                                {stat.base_stat}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    <div className="pokemon__secondaryStats">
                      <span className="secondaryStats__height">Height:{pokemon.height}</span>
                      <span className="secondaryStats__weight">Weight:{pokemon.weight}</span>
                    </div>
                  </div>
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
