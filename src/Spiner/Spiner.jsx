import React from "react";
import "./spiner.css"

function Spiner() {

    return (
        <>
            <div className="main-spinner">
                <div className="spinner-bx">
                    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

                    <div className="spin-text">
                        <p>Loading...</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Spiner }