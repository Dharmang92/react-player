import React from "react";

function Controls({ name }) {
    return (
        <div className="flex justify-center mx-1">
            <div className="fixed inline-block bottom-0 w-1/2 mb-2">
                <div
                    className={
                        window.navigator.userAgent.includes("Chrome")
                            ? "pb-2 text-center text-black py-1 rounded-t-lg bg-white"
                            : "pb-2 text-center text-white py-1 rounded-t-lg bg-black"
                    }
                >
                    {name ? (
                        <div>{name}</div>
                    ) : (
                        <div>Click on any song to Play</div>
                    )}
                </div>
                <audio
                    id="audio"
                    className={
                        window.navigator.userAgent.includes("Chrome")
                            ? "w-full rounded-b-lg bg-white"
                            : "w-full rounded-b-lg bg-black"
                    }
                    autoPlay={name}
                    controls
                    src={`http://localhost:3001/${name}`}
                ></audio>
            </div>
        </div>
    );
}

export default Controls;
