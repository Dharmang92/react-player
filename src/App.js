import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Player from "./components/Player";
import List from "./components/List";

function App() {
    const [songs, setSongs] = useState([]);
    const [now, setNow] = useState("");

    const handleClick = (name) => {
        setNow(name);
    };

    useEffect(() => {
        fetch("http://localhost:3001", { mode: "cors" })
            .then((res) => res.json())
            .then((data) => {
                setSongs(data.songs);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <Nav />
            <Player name={now} />
            <List clickFun={handleClick} songs={songs} />
        </div>
    );
}

export default App;
