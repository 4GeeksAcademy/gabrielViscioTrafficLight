// Home.jsx
import React, { useState } from "react";
import { UpButton, MidButton, DownButton } from "./ButtonComponents";

function Home() {
    const [backgroundUp, setBackgroundUp] = useState('red');
    const [backgroundMid, setBackgroundMid] = useState('grey');
    const [backgroundDown, setBackgroundDown] = useState('grey');

    return (
        <>
            <h1>Semáforo</h1>
            <div style={{ backgroundColor: 'black', width: '70px', margin: 'auto', height: '190px', display: "flex", justifyContent: 'center', borderRadius: '10%', flexDirection: "column", alignItems: "center", gap: "10px" }}>
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

export default Home;
