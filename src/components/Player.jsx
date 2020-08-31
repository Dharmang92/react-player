import React from "react";

function Player({ name }) {
    return (
        <div className="bg-red-400 md:w-3/12 md:float-left">
            {name && <div>Now Playing: {name}</div>}
            <audio controls autoPlay src=""></audio>
        </div>
    );
}

export default Player;
