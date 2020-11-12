import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron"
import FriendCard from "./components/FriendCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
// import Venturebros from "./components/images"
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // state = {
  //   friends: friends,
  //   score: 0,
  //   highScore: 0
  // };

  clickCharacter = (id) => {

    console.log(friends)
    const clickCheck = this.state.friends.find((char) => char.id === id);
    const shuffleFriends = (char) => {
      char.sort(() => Math.random() - 0.5);
    };
    const resetClick = (list) =>
      list.map((current) => ({ ...current, clicked: false }));

    //if the card has been clicked before, this resets them
    if (clickCheck.clicked === true) {
      resetClick(friends);
      this.setState({ score: 0 })
      return;
    } else {
      let friends1 = this.state.friends.map((char) => {
        if (char.id === id) {
          return {
            ...char,
            clicked: true
            //sets true/false to recognize that the card has been clicked
          };
        }
        return char;
      });
      this.setState({ friends: friends1, score: this.state.score + 1 });
      console.log(this.state.score);
      shuffleFriends(friends1);
    }
  };


  render() {
    return (
      <Wrapper>
        <div>
          <Navbar

          // score={this.state.score}
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Jumbotron />
        {/* {this.state.friends.map((friends) => (


      ))} */}
        <FriendCard
          id={friends.id}
          image={friends.image}
          name={friends.name}
          clicked={friends.clicked}
        />

      </Wrapper>

    );
  }
}
export default App;
