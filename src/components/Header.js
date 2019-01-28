import React from "react";
import "./Header.css";

const Header = props => {
    return (
        <header className="header">
            <h3 className="left">Clicky Game</h3>
            <h3 className="center">{props.headerText}</h3>
            <h3 className="center">Score: {props.score}</h3>
            <h3 className="center">Top Score: {props.topScore}</h3>
        </header>
    )
}

export default Header;
