import React, { useRef, useState } from "react";
import './pincode.css'
import { Slide, ToastContainer, toast } from "react-toastify";

function PinCode(){
    const [inputValue, setInputValue] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [buttonText, setButtonText] = useState('Check');
    const [comma, setComma] = useState('');


    const InputRef = useRef()


    const handleCheck = async()=>{
        try{
       const response = await fetch(`https://api.postalpincode.in/pincode/${inputValue}`);
       const fetchRes = await response.json();

       if(fetchRes && fetchRes[0].PostOffice && fetchRes[0].PostOffice.length >0){
            const {District, State} = fetchRes[0].PostOffice[0]
           setState(State)
           setCity(District)
           setComma(',')
        }else{
           setState('');
           setCity('');
           setComma('');

        }
    }catch(error){
        console.log("Error in fetching Pincode", error)
    }}

    const handleChange = ()=>{
        if(buttonText === 'Check'){
            if(inputValue === ''){
                toast.error('Please Enter a valid Pincode')
                setButtonText('Check')
                setComma()
            }
            else if(inputValue !== ''){
                setButtonText('Change')
                handleCheck()
            }
       
        }
        if(buttonText === 'Change'){
          InputRef.current.focus()
          setInputValue('')
          setCity('')
          setState('')
          setComma('')
          setButtonText('Check')
        }
        else if(buttonText === 'Change'){
            setButtonText('Check')
        }
    }
    return (
        <>
        <ToastContainer theme="dark" autoClose={1500} transition={Slide} position="top-center" hideProgressBar={true}/>
            <div className="pincode-field">
                <input ref={InputRef} type="text" placeholder="Enter Valid Pincode" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
             
                <span onClick={handleChange}>{buttonText}</span>
            </div>
            <div>
                <span style={{fontSize: "13px",paddingBottom: "10px"}}>{city}</span>
                <span>{comma}</span>
                <span style={{fontSize: "13px"}}>{state}</span>
            </div>
        </>
    );
}

export { PinCode };
