import React, { Component } from 'react';
import Card from '../components/Card';

const data = [
    {
        title: "Supervisor",
        description: "Monitors activity to identify project roadblocks",
        imageUrl: "./images/icon-supervisor.svg",
    },
    {
        title: "Team Builder",
        description: "Scans our talent network to create the optimal team for your project",
        imageUrl: "./images/icon-team-builder.svg",
    },
    {
        title: "Karma",
        description: "Regularly evaluates our talent to ensure quality",
        imageUrl: "./images/icon-karma.svg",
    },
    {
        title: "Calculator",
        description: "Uses data from past projects to provide better delivery estimates ",
        imageUrl: "./images/icon-calculator.svg",
    }

]


class CardList extends Component {
    render(){

        return(
        <div className="card-list-container">
            <div className="singleCard">
                {data.map((item, index) => index === 0 
                ? <Card {...item}/> : null )}
            </div>
            <div className="stackCardsClass">
                {data.map((item, index)  => index === 1 || index === 2 
                ? <Card  {...item}/> 
                : null)
                }  
            </div>
            <div className="singleCard">
                {data.map((item, index) => index === 3 
                ? <Card {...item}/> : null )}
            </div>
        </div>
        )

    }

}

export default CardList;