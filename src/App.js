import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Player from "./components/Player";
import List from "./components/List";
import Controls from "./components/Controls";

function App() {
    const [now, setNow] = useState("");
    const [songs, setSongs] = useState([]);
    const [clear, setClear] = useState(false);
    const [folder, setFolder] = useState("");
    // const [lastArt, setLastArt] = useState("");

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

    const handleSearch = (search) => {
        const matchedSongs = songs.filter((song) => {
            if (song.toLowerCase().includes(search)) {
                return song;
            } else {
                return null;
            }
        });

        setSongs([...matchedSongs]);
    };

    const handleClear = () => {
        setClear(true);
    };

    const handleFolder = (text) => {
        setFolder(text);
    };

    const handlePost = (e) => {
        e.preventDefault();

        fetch(`https://cors-anywhere.herokuapp.com/http://localhost:3001/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: { folder },
        })
            .then((res) => res)
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetch("http://localhost:3001", { mode: "cors" })
            .then((res) => res.json())
            .then((data) => {
                setSongs(data.songs);
            })
            .catch((err) => console.log(err));

        setClear(false);
    }, [clear]);

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
                        clearFun={handleClear}
                        folderFun={handleFolder}
                        sendPost={handlePost}
                    />
                </div>

                <div className="md:w-9/12 md:mt-16">
                    <List clickFun={handleClick} songs={songs} name={now} />
                </div>
            </div>

            {/* <Controls name={now} /> */}
        </div>
    );
}

export default App;
