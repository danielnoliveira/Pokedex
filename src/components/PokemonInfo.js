import React from 'react';
import './PokemonInfo.css';
import { FaSearchPlus} from "react-icons/fa";
import {AiFillCloseCircle} from 'react-icons/ai';
import PokemonInfoContainer from './PokemonInfoContainer.js';
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
export default function PokemonInfo({id,types,stats,height,weight,newid}) {
    return (
        <div className="pokemon__info">
            <FaSearchPlus className="info__button" onClick={()=>showInfoCard(newid)}/>
            <AiFillCloseCircle className="info__buttonExit" onClick={()=>showInfoCard(newid)}/>
            <PokemonInfoContainer types={types} height={height} weight={weight} stats={stats}/>    
        </div>
    );
}

