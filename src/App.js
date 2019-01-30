import React, { Component } from 'react';
import Header from "./components/Header";
import Banner from "./components/Banner";
import characters from "./characters.json";
import Game from "./components/Game";
import { Container } from "./components/contain";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    headerText: "Click an image to begin!",
    characters: []
  }

  componentDidMount() {
    this.setState({
      characters: this.shuffle(characters)
    })
  }

  shuffle = array => {
    let counter = array.length;
    while (counter > 0) {
      let i = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[i];
      array[i] = temp;
    }
    return array;
  }

  resetGame = characters => {
    const newCharacters = characters.map(char => {
      if (char.picked) {
        char.picked = false
      }
      return char;
    })
    return this.shuffle(newCharacters)
  }

  correctGuess = newCharacters => {
    let newScore = this.state.score + 1
    let newTop = Math.max(newScore, this.state.topScore);

    this.setState({
      characters: this.shuffle(newCharacters),
      score: newScore,
      topScore: newTop,
      headerText: "You guessed correctly!"
    })
  }

  wrongGuess = newCharacters => {
    this.setState({
      score: 0,
      headerText: "You guessed incorrectly!",
      characters: this.resetGame(newCharacters)
    })
  }
  
  chooseCard = id => {
    let guessedCorrectly = false;
    const newCharacters = this.state.characters.map(char => {
      if (id === char.id) {
        if (!char.picked) {
          char.picked = true;
          guessedCorrectly = true;
        }
      }
      return char;
    })
    guessedCorrectly ? this.correctGuess(newCharacters) : this.wrongGuess(newCharacters)

  }

  render() {
    return <>
      <Header 
        score={this.state.score}
        topScore={this.state.topScore}
        headerText={this.state.headerText}
      />
      <Banner />
      <Container>
        {this.state.characters.map(char => (
          <Game 
            id={char.id}
            key={char.id}
            image={char.image}
            name={char.name}
            picked={char.picked}
            headerText={this.state.headerText}
            chooseCard={() => this.chooseCard(char.id)}
          />
        ))}
      </Container>
    </>
  }
}

export default App;
