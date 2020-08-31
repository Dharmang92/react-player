import React from "react";

function List({ songs, clickFun }) {
    return (
        <div className="bg-yellow-400 w-full">
            {songs.map((song) => {
                return (
                    <ul>
                        <li onClick={() => clickFun(song)}>{song}</li>
                    </ul>
                );
            })}
        </div>
    );
}

export default List;
