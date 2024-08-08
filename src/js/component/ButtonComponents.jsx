import React, { useState } from "react";

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

const Instruction = () => (
    <div className="alert alert-primary" role="alert">
         ¡Debes clickear el color que quieres que funcione!
    </div>
);

function ButtonComponents() {
    const [backgroundUp, setBackgroundUp] = useState('red');
    const [backgroundMid, setBackgroundMid] = useState('grey');
    const [backgroundDown, setBackgroundDown] = useState('grey');

    return (
        <>
            <Instruction />
            <div style={{ backgroundColor: 'black', width: '70px', margin: 'auto', height: '190px', display: "flex", justifyContent: 'center', borderRadius:'10%', flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <UpButton 
                    backgroundUp={backgroundUp} 
                    setBackgroundUp={setBackgroundUp} 
                    setBackgroundMid={setBackgroundMid} 
                    setBackgroundDown={setBackgroundDown} 
                />
                <MidButton 
                    backgroundMid={backgroundMid} 
                    setBackgroundMid={setBackgroundMid} 
                    setBackgroundUp={setBackgroundUp} 
                    setBackgroundDown={setBackgroundDown} 
                />
                <DownButton 
                    backgroundDown={backgroundDown} 
                    setBackgroundDown={setBackgroundDown} 
                    setBackgroundUp={setBackgroundUp} 
                    setBackgroundMid={setBackgroundMid} 
                />
            </div>
        </>
    );
}

export default ButtonComponents;
