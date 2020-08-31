import React from "react";

function Player({ name, cover, searchFun }) {
    return (
        <div>
            {/* <img src={cover} alt="album_art" /> */}
            <div className="flex md:fixed w-full md:w-3/12 justify-center bg-red-400 p-2 md:h-screen items-center flex-col">
                <img
                    src="https://i.picsum.photos/id/672/200/200.jpg?hmac=Lxbn4Lr7MXAJeCswWkTG9-O-DaafCb75aUGSBrd3ZWU"
                    alt=""
                    className="h-32 p-1"
                />
                <div className="pb-2 text-center">
                    {name ? (
                        <div>{name}</div>
                    ) : (
                        <div>Click on any song to Play</div>
                    )}
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Type song name to search"
                        onChange={(e) => searchFun(e, e.target.value)}
                        className="p-2 rounded-lg border-orange-300 hover:shadow-outline bg-yellow-400 placeholder-yellow-900"
                    />
                </div>
            </div>

            <audio
                className="w-full fixed inline-block bottom-0"
                id="audio"
                autoPlay={name}
                controls
                src={`http://localhost:3001/${name}`}
            ></audio>
        </div>
    );
}

export default Player;
