import React from './node_modules/react';
import classes from './MatchCards.module.css'

const MatchCards = (props) => {
    let matchList = null;
    let currentClasses = classes.DisplayNone;
    if (props.matchListData) {
        matchList = props.matchListData.matches.map(
            match => {
                return <div key={match.gameId}>champion id: {match.champion}</div>
            }
        );
        currentClasses = classes.MatchCardsContainer;
    }
    return (
        <div className={currentClasses}>
            {matchList}
        </div>
    );
};

export default MatchCards;