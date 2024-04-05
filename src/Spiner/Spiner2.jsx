import React from "react";
import "./spiner2.css";

function Spiner2() {

    return (
        <>
            <div className="main-spinner2">
                <div className="spinner-bx2">
                    <div class="lds-spinner2"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

                    <div className="spin-text2">
                        <p>Loading...</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Spiner2 }