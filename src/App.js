import React,{useEffect,useState} from 'react';
import './App.css';
import pokemonsList from './data/pokemon.json';
import Header from './components/Header';
import Loading from './components/Loading';
import PokemonList from './components/PokemonList';
function App() {
  const [pokemons,setPokemons] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
      setPokemons([...pokemonsList]);
      setLoading(false);
  },[]);
  
  function atualizarLista(e){
    setPokemons([...pokemonsList.filter((pokemon)=>{
      return pokemon.name.includes(e.target.value.toLowerCase());
    })]);
  }
  
  function LoadOrShowList(){
    return loading?<Loading />:<PokemonList pokemons={pokemons}/>;
  }
  
  return (
    <div className="App">
        <Header atualizarLista={atualizarLista}/>
        <main className="App__list">
          <LoadOrShowList />
        </main>
    </div>
  );
}

export default App;
