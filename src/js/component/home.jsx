import React from "react";
import ButtonComponents from "./ButtonComponents";

function Home() {
    return (
        <>
            <h1 style={{marginBottom:'30px', backgroundColor:'#cfe2ff',color:'#084aa2', display:"flex", justifyContent:'center'}}>Semáforo</h1>
            <ButtonComponents />
            <div style={{backgroundColor:'black', width:'10px', height:'40px', margin:'auto'}}></div>
        </>
    );
}

export default Home;
