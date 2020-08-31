import React from "react";

function Player() {
    return (
        <div className="bg-red-400 md:w-3/12 md:float-left">
            <audio
                controls
                autoPlay
                src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
            ></audio>
        </div>
    );
}

export default Player;
