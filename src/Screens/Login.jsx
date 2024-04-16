import React, { useEffect, useState } from "react";
import { LoginPage } from "../LoginFunctionality/LoginPage";
import { Spiner2 } from "../Spiner/Spiner2";

function Login(){
    const [showSpin , setShowSpin] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setShowSpin(false)
        },1100)
    })

    return(
        <>{
            showSpin ? <Spiner2/> :<LoginPage/>
        }
        </>
    )
}

export {Login}