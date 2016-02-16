import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/voting';

const pair = ['Trainspotting', '28 Days Later'];

let onVote = (entry) => {
    console.log('entry', entry);
};

ReactDOM.render(
    <Voting pair={pair} hasVoted="Trainspotting" vote={onVote} />
    , document.getElementById('app')
);