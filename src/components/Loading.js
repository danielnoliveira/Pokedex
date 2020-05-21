import React from 'react';
import './Loading.css';
export default function Loading(props){
    return(
        <div className="container">
          <div className="container__loading">

          </div>
          <h3 className="container__text">Loading<span>.</span><span>.</span><span>.</span></h3>
        </div>
    );
}