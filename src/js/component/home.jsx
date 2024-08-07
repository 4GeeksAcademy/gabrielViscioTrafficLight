import React from "react";

// Importa la imagen si la necesitas
import rigoImage from "../../img/rigo-baby.jpg";
import { UpButton, DownButton, MidButton } from "./trafficLight.jsx";

// Crea tu componente principal
const Home = () => {
    return (
        <>
            <h1>Semáforo</h1>
            <div style={{ backgroundColor:'black', width:'70px',margin:'auto',height:'190px', display: "flex",justifyContent:'center',borderRadius:'10%', flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <UpButton />
                <MidButton />
                <DownButton />
            </div>
        </>
    );
};

export default Home;