import React from "react";
import "./Game.css";

const Game = props => {
    return (
        <div className="card">
            <div className="image">
                <img 
                    alt={props.name} 
                    src={props.image}
                    id={props.id}
                    onClick={props.chooseCard}
                     />
            </div>
        </div>
    )
}

export default Game;