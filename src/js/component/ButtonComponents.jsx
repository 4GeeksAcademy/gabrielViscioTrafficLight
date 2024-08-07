// ButtonComponents.jsx
import React from "react";

const UpButton = ({ backgroundUp, setBackgroundUp, setBackgroundMid, setBackgroundDown }) => (
    <button
        onClick={() => {
            if (backgroundUp !== 'red') {
                setBackgroundUp('red');
                setBackgroundMid('grey');
                setBackgroundDown('grey');
            }
        }}
        style={{ backgroundColor: backgroundUp, width: "50px", height: "50px", borderRadius: "50%" }}
    ></button>
);

const MidButton = ({ backgroundMid, setBackgroundMid, setBackgroundUp, setBackgroundDown }) => (
    <button
        onClick={() => {
            if (backgroundMid !== 'yellow') {
                setBackgroundMid('yellow');
                setBackgroundUp('grey');
                setBackgroundDown('grey');
            }
        }}
        style={{ backgroundColor: backgroundMid, width: "50px", height: "50px", borderRadius: "50%" }}
    ></button>
);

const DownButton = ({ backgroundDown, setBackgroundDown, setBackgroundUp, setBackgroundMid }) => (
    <button
        onClick={() => {
            if (backgroundDown !== 'green') {
                setBackgroundDown('green');
                setBackgroundUp('grey');
                setBackgroundMid('grey');
            }
        }}
        style={{ backgroundColor: backgroundDown, width: "50px", height: "50px", borderRadius: "50%" }}
    ></button>
);

export {UpButton, MidButton, DownButton};