import React from "react";
import "./loadingSpinner.css"

function LoadingSpinner() {

    return (
        <>
            <div className="main-spinner3">
                <div className="spinner-bx3">
                    <div class="lds-spinner3"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
        </>
    )
}

export { LoadingSpinner }