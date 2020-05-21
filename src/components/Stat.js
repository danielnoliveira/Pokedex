import React from 'react';
import './Stat.css';
export default function Stat({stat}) {
    return (
        <div className="stat">
            <span className="stat__title">{stat.stat.name}</span>
            <div className="stat__bar">
                <div className="bar" style={{width:(stat.base_stat/255)*100}}>
                </div>  
                {stat.base_stat}
            </div>
        </div>
    );
}