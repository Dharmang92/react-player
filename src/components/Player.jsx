import React from "react";

function Player({ name, cover, searchFun, clearFun }) {
    return (
        <div>
            {/* <img src={cover} alt="album_art" /> */}
            <div className="flex md:fixed w-full md:w-3/12 justify-center bg-red-400 p-2 md:h-screen items-center flex-col">
                <img
                    src="https://i.picsum.photos/id/672/200/200.jpg?hmac=Lxbn4Lr7MXAJeCswWkTG9-O-DaafCb75aUGSBrd3ZWU"
                    alt=""
                    className="h-32 p-1"
                />

                <div>
                    <input
                        type="text"
                        placeholder="Type song name to search"
                        onChange={(e) => searchFun(e.target.value)}
                        className="p-2 mt-1 rounded-lg border-orange-300 hover:shadow-outline bg-yellow-400 placeholder-yellow-900"
                    />
                    <div className="text-center p-1 mt-1">
                        <button
                            className="bg-red-600 text-white rounded p-2 hover:bg-red-500"
                            onClick={clearFun}
                        >
                            Reset Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="fixed inline-block bottom-0 w-1/2 flex flex-col justify-center">
                <div className="pb-2 text-center bg-black text-white py-1 rounded-t">
                    {name ? (
                        <div>{name}</div>
                    ) : (
                        <div>Click on any song to Play</div>
                    )}
                </div>
                <div>
                    <audio
                        id="audio"
                        className="w-full bg-black"
                        autoPlay={name}
                        controls
                        src={`http://localhost:3001/${name}`}
                    ></audio>
                </div>
            </div>
        </div>
    );
}

export default Player;
