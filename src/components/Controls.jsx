import React from "react";

function Controls({ name }) {
    return (
        <div className="flex justify-center mx-1">
            <div className="fixed inline-block bottom-0 w-1/2 mb-2">
                <div className="pb-2 text-center bg-black text-white py-1 rounded-t-lg">
                    {name ? (
                        <div>{name}</div>
                    ) : (
                        <div>Click on any song to Play</div>
                    )}
                </div>
                <audio
                    id="audio"
                    className="w-full bg-black rounded-b-lg"
                    autoPlay={name}
                    controls
                    src={`http://localhost:3001/${name}`}
                ></audio>
            </div>
        </div>
    );
}

export default Controls;
