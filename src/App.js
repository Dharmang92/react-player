import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Player from "./components/Player";
import List from "./components/List";

function App() {
    const [now, setNow] = useState("");
    const [songs, setSongs] = useState([]);
    // const [lastArt, setLastArt] = useState("");
    const [search, setSearch] = useState(false);

    const handleClick = (name) => {
        setNow(name);
        // fetch(
        //     `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${name
        //         .split(" ")
        //         .join("+")
        //         .slice(
        //             0,
        //             -4
        //         )}&api_key=05298a2fd6f2054ac296614d71757c42&format=json`
        // )
        //     .then((res) => res.json())
        //     .then((data) => {
        //         if (data.results.trackmatches.track.length !== 0) {
        //             setLastArt(
        //                 data.results.trackmatches.track[0].image[2]["#text"]
        //             );
        //         }
        //     });
    };

    const handleSearch = (e, text) => {
        e.preventDefault();
        if (text === "") {
            setSearch(false);
        } else {
            setSongs([
                ...songs.filter((song) => {
                    if (song.toLowerCase().includes(text)) {
                        return song;
                    } else {
                        return null;
                    }
                }),
            ]);
            setSearch(true);
        }
    };

    useEffect(() => {
        fetch("http://localhost:3001", { mode: "cors" })
            .then((res) => res.json())
            .then((data) => {
                setSongs(data.songs);
            })
            .catch((err) => console.log(err));
    }, [search]);

    // useEffect(() => {
    //     document.addEventListener("keydown", (event) => {
    //         if (event.key === " ") {
    //             event.preventDefault();
    //             if (document.getElementById("audio").paused) {
    //                 document.getElementById("audio").play();
    //             } else {
    //                 document.getElementById("audio").pause();
    //             }
    //         }
    //     });
    // }, []);

    return (
        <div>
            <Nav />

            <div className="md:flex">
                <div className="md:w-3/12">
                    <Player
                        name={now}
                        // cover={lastArt}
                        searchFun={handleSearch}
                    />
                </div>

                <div className="md:w-9/12 md:mt-16">
                    <List clickFun={handleClick} songs={songs} />
                </div>
            </div>
        </div>
    );
}

export default App;
