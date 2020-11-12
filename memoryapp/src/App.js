import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron"
import FriendCard from "./components/FriendCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
// import Venturebros from "./components/images"
import friends from "./friends.json";
import "./App.css";


// state = {
//   friends: friends,
//   score: 0,
//   highScore: 0
// };

function App() {
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

export default App;
