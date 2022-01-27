import React from 'react'

function Loader() {
    return (
        <div style={{ width: "100%", height:"50%" , display: "flex", justifyContent: "center", alignContent: "center" }}>
            <img style={{width:"25%", height:"25%"}} src='/assets/loader.svg' alt='loader' />
        </div>
    )
}

export default Loader;
