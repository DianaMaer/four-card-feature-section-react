import React from 'react';
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
const CardList = () => (
    <div>
        {data.map(item  => (
            <Card {...item} />
        ))};
    </div>
);

export default CardList;