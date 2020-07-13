import React, { Component } from 'react';

const Card = (props)=>{
    
        return (
        <section className="section-card">
            <div className="text-container">
                <h3>{props.imageUrltitle}</h3>
                <p className="text-card">{props.description}</p>
            </div>
            <div className="image-container">
                <img className="image-card" src = {props.imageUrl}/>
            </div>
        </section>
    )
    }

export default Card;

