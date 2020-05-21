import React from 'react';
import './Header.css';
export default function Header(props){
    return(
        <header className="App__header">
          <img src={require('../images/pokemon-logo.png')} alt="pokemon logo"/>
          <input onChange={(e)=>props.atualizarLista(e)} className="header__inputSearch" type="text" name="pokemon" placeholder="Pokemon name"/>
        </header>
    );
}