import React from 'react';
import './SecondaryStats';
export default function SecondaryStats({height,weight}) {
    return(
        <div className="pokemon__secondaryStats">
            <span className="secondaryStats__height">Height:{height}</span>
            <span className="secondaryStats__weight">Weight:{weight}</span>
        </div>
    );
}