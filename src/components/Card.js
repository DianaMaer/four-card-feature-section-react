import React, { Component } from 'react';

class Card extends React.Component {
    render(){
        return (
        <section>
            <h3>Title</h3>
            <p>Text</p>
            <img src = 'https://randomuser.me/api/portraits/men/79.jpg'/>
        </section>
    )
    }
}


export default Card;

