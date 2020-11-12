import React from "react";
import FriendCard from "./components/FriendCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
// import Venturebros from "./components/images"
import friends from "./friends.json";

import "./App.css";

function App() {
  return (




    <Wrapper>
      <div>
        <Navbar

        // score={score}
        />
      </div>
      <h1 className="title">Friends List</h1>
      <FriendCard
        image={friends[0].image}
      />
      <FriendCard
        image={friends[1].image}
      />
      <FriendCard
        image={friends[2].image}
      />
      <FriendCard
        image={friends[3].image}
      />
      <FriendCard
        image={friends[4].image}
      />
      <FriendCard
        image={friends[5].image}
      />
      <FriendCard
        image={friends[6].image}
      />
      <FriendCard
        image={friends[7].image}
      />
      <FriendCard
        image={friends[8].image}
      />
      <FriendCard
        image={friends[9].image}
      />
      <FriendCard
        image={friends[10].image}
      />
      <FriendCard
        image={friends[11].image}
      />
      <FriendCard
        image={friends[12].image}
      />
    </Wrapper>

  );
}

export default App;
