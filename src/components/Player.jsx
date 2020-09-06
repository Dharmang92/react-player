import React from "react";

function Player({ cover, searchFun, clearFun, folderFun, sendPost }) {
    return (
        <div>
            {/* <img src={cover} alt="album_art" /> */}
            <div className="flex md:fixed w-full md:w-3/12 justify-center bg-red-400 p-2 md:h-screen items-center flex-col">
                <div className="rounded border-white">
                    <img
                        src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        alt="sample album art"
                        className="h-32 p-1"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Type song name to search"
                        onChange={(e) => searchFun(e.target.value)}
                        className="p-2 mt-1 rounded-lg border-orange-300 hover:shadow-outline bg-yellow-400 placeholder-yellow-900 text-center"
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

                <div>
                    <form onSubmit={sendPost}>
                        <input
                            type="text"
                            placeholder="Folder path to play songs"
                            onChange={(e) => folderFun(e.target.value)}
                            size="35"
                            className="p-2 mt-8 rounded-lg hover:shadow-outline bg-orange-200 placeholder-orange-900 text-center"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Player;
