import React from "react";
import Nav from "./components/Nav";
import Player from "./components/Player";
import List from "./components/List";

function App() {
    return (
        <div>
            <Nav />
            <div className="flex">
                <Player />
                <List />
            </div>
        </div>
    );
}

export default App;
