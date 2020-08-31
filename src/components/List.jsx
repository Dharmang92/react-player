import React from "react";
// import { v4 } from "uuid";

function List({ songs, clickFun }) {
    return (
        <div className="bg-yellow-400 w-full mb-10">
            <ul>
                {/* {songs.slice(0, 50).map((song, index) => { */}
                {songs.map((song, index) => {
                    return (
                        <li
                            className="hover:bg-yellow-500 cursor-pointer p-1"
                            key={index}
                            onClick={() => clickFun(song)}
                        >
                            <div className="flex items-center m-1">
                                <div className="flex bg-yellow-300 px-2 py-1 rounded justify-center">
                                    {index}
                                </div>
                                <div className="m-2">{song}</div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default List;
