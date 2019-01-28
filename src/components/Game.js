import React from "react";

const Game = props => {
    return (
        <div className="card">
            <div className="image">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
}