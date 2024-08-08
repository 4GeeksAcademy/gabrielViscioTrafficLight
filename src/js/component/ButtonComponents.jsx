import React, { useState } from "react";

const UpButton = ({ backgroundUp, setBackgroundUp, setBackgroundMid, setBackgroundDown, isPurple }) => (
    <button
        onClick={() => {
            if (!isPurple && backgroundUp !== 'red') {
                setBackgroundUp('red');
                setBackgroundMid('grey');
                setBackgroundDown('grey');
            }
        }}
        style={{ backgroundColor: isPurple ? 'purple' : backgroundUp, width: "50px", height: "50px", borderRadius: "50%" }}
    ></button>
);

const MidButton = ({ backgroundMid, setBackgroundMid, setBackgroundUp, setBackgroundDown, isPurple }) => (
    <button
        onClick={() => {
            if (!isPurple && backgroundMid !== 'yellow') {
                setBackgroundMid('yellow');
                setBackgroundUp('grey');
                setBackgroundDown('grey');
            }
        }}
        style={{ backgroundColor: isPurple ? 'purple' : backgroundMid, width: "50px", height: "50px", borderRadius: "50%" }}
    ></button>
);

const DownButton = ({ backgroundDown, setBackgroundDown, setBackgroundUp, setBackgroundMid, isPurple }) => (
    <button
        onClick={() => {
            if (!isPurple && backgroundDown !== 'green') {
                setBackgroundDown('green');
                setBackgroundUp('grey');
                setBackgroundMid('grey');
            }
        }}
        style={{ backgroundColor: isPurple ? 'purple' : backgroundDown, width: "50px", height: "50px", borderRadius: "50%" }}
    ></button>
);

const Instruction = () => (
    <div className="alert alert-info" role="alert">
         ¡Debes clickear el color que quieres que funcione!
    </div>
);

function ButtonComponents() {
    const [backgroundUp, setBackgroundUp] = useState('red');
    const [backgroundMid, setBackgroundMid] = useState('grey');
    const [backgroundDown, setBackgroundDown] = useState('grey');
    const [isPurple, setIsPurple] = useState(false);

    const togglePurpleMode = () => {
        setIsPurple(!isPurple);
    };

    return (
        <>
            <Instruction />
            <div style={{ backgroundColor: 'black', width: '70px', margin: 'auto', height: '190px', display: "flex", justifyContent: 'center', borderRadius:'10%', flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <UpButton 
                    backgroundUp={backgroundUp} 
                    setBackgroundUp={setBackgroundUp} 
                    setBackgroundMid={setBackgroundMid} 
                    setBackgroundDown={setBackgroundDown} 
                    isPurple={isPurple}
                />
                <MidButton 
                    backgroundMid={backgroundMid} 
                    setBackgroundMid={setBackgroundMid} 
                    setBackgroundUp={setBackgroundUp} 
                    setBackgroundDown={setBackgroundDown} 
                    isPurple={isPurple}
                />
                <DownButton 
                    backgroundDown={backgroundDown} 
                    setBackgroundDown={setBackgroundDown} 
                    setBackgroundUp={setBackgroundUp} 
                    setBackgroundMid={setBackgroundMid} 
                    isPurple={isPurple}
                />
            </div>
            <div style={{backgroundColor:'black', width:'10px', height:'40px', margin:'auto'}}></div>
            <button 
                onClick={togglePurpleMode} 
                style={{ marginTop: '200px', display: 'block', margin: 'auto', padding: '10px 20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '5px' }}
            >  
                {isPurple ? "Modo Normal" : "Modo Púrpura"}
            </button>
        </>
    );
}

export default ButtonComponents;
