import React, { Component } from 'react';
import Header from "./components/Header";
import Banner from "./components/Banner";
import characters from "./characters.json";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    headerText: "Click an image to begin!",
    pick,
    pickedArr: [],
    pickedBefore: false,
    characters
  }

  shuffle = array => {
    let counter = array.length;
    while (counter > 0) {
      let i = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  }
  
  resetCards = () => {
    this.setState({ characters = shuffle(characters)});
  }

  chooseCard = id => {
    if (this.state.pickedArr.indexOf(id) = -1) {
      let newPicked = this.state.pickedArr.push(id);
      let newScore = this.state.score + 1; 
      if (this.state.pickedBefore === true) {
        this.setState({ pickedBefore: false })
      }
      this.setState({ 
        characters = shuffle(characters),
        pickedArr = newPicked,
        headerText: "You guessed correctly!",
        score: newScore
      })

    }    
  }

  render() {
    return <>
      <Header 
        score={this.state.score}
        topScore={this.state.topScore}
        headerText={this.state.headerText}
      />
      <Banner />
      {this.state.characters.map(char => (
        <Game 
          id={char.id}
          key={char.id}
          image={char.image}
          name={char.name}
          resetCards = {this.resetCards}
          pick = {this.state.pick}
          pickedArr = {this.state.pickedArr}
          pickedBefore = {this.state.pickedBefore}
          headerText = {this.state.headerText}
          chooseCard = {this.chooseCard}
        />
      ))}
    </>
  }
}

export default App;
