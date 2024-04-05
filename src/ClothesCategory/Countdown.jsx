import React, { useEffect, useState } from "react";

function CountDown(){

    const [seconds, setSeconds ] = useState(0);
    const [ minutes, setMinutes ] = useState(0);
    const [hours, setHours] = useState(4);

    let timer;

    useEffect(()=>{

        timer = setInterval(()=>{

            setSeconds(seconds-1);
            if(seconds===0){
                setMinutes(minutes-1);
                setSeconds(59)
            }
            if(minutes===0){
                setHours(hours-1);
                setMinutes(59);
                setSeconds(59)
            }

        },1000)
        return()=> clearInterval(timer)

    })

    const restart = ()=>{
        setSeconds(59);
        setMinutes(59)
    }

    const stopp = ()=>{
        clearInterval(timer)
    }

    return(
        <>
        {/* <h1>Timer</h1> */}
        <span className="countdown" style={{marginLeft: "8px", backgroundColor: "#ede8e8", padding: "2px 5px", }}>{hours<10? "0"+hours : hours}:{minutes<10? "0"+minutes : minutes}:{seconds<10? "0"+seconds : seconds}</span>
        {/* <button onClick={restart}>Restart</button>
        <button onClick={stopp}>Stop</button> */}
        </>
    )
}

export { CountDown }