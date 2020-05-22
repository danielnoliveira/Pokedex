import React from 'react';
import './SecondaryStats.css';
export default function SecondaryStats({height,weight}) {
    return(
        <div className="pokemon__secondaryStats">
            <span className="secondaryStats__height">Height: {height/10} <span style={{textTransform:"lowercase"}}>m</span></span>
            <span className="secondaryStats__weight">Weight: {weight/10} Kg</span>
        </div>
    );
}