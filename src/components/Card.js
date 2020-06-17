import React, { Component } from 'react';

class Card extends React.Component {
    render(){
        return (
        <section className="section-card">
            <h3>{this.props.title}</h3>
            <p className="text-card">{this.props.description}</p>
            <img src = {this.props.imageUrl}/>
        </section>
    )
    }
}

export default Card;

