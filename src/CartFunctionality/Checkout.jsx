import React, { useEffect, useState } from "react";
import "./checkout.css";
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from "react-use-cart";
import { Spiner } from "../Spiner/Spiner";

function Checkout({ onNextStep }) {

    // for select address type -------------------------
    const [place, setPlace] = useState(null)
    const handlePlaceClick = (p)=>{
        setPlace(p)
    }
    
    // for spinner 
    const [showspin, setShowspin] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            setShowspin(false)
        }, 1000)
    })
    
    //  for Add Items In Cart
    const { totalUniqueItems, cartTotal } = useCart()

    // for Input Value ---------------------------------------------
    const [uname, setUname] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    // for Error Message -------------------------------------------
    const [unameError, setUnameError] = useState(false);
    const [mobileError, setMobileError] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [pincodeError, setPincodeError] = useState(false);
    const [countryError, setCountryError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [stateError, setStateError] = useState(false);

    const handleAddress = (e)=>{
        e.preventDefault()
       if(uname === ''){
        setUnameError(true)
       }
       if(mobile === ''){
        setMobileError(true)
       }
       if(address === ''){
        setAddressError(true)
       }
       if(pincode === ''){
        setPincodeError(true)
       }
       if(country === ''){
        setCountryError(true)
       }
       if(city === ''){
        setCityError(true)
       }
       if(state === ''){
        setStateError(true)
       }


       if(uname !== ''){
        setUnameError(false)
       }
       if(mobile !== ''){
        setMobileError(false)
       }
       if(address !== ''){
        setAddressError(false)
       }
       if(pincode !== ''){
        setPincodeError(false)
       }
       if(country !== ''){
        setCountryError(false)
       }
       if(city !== ''){
        setCityError(false)
       }
       if(state !== ''){
        setStateError(false)
       }
       if (uname !== '' && mobile !== '' && address !== '' && pincode !== '' && city !== '' && state !== '' && country !== '') {
       toast.success("Your address has saved.")
    }
    }

    // for fetch Country, City and State by Pincode ----------------------------------

    const handlePincode = async(e)=>{
       const pin = e.target.value;
       setPincode(pin);
       try{
        const response = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
        const data = await response.json();
        if(data && data[0].PostOffice && data[0].PostOffice.length >0){
            const {District, State, Country} = data[0].PostOffice[0];
            setCountry(Country);
            setState(State);
            setCity(District);
            //  If Pincode filled then remove errors for city, state, country and Pincode
            setCountryError(false);
            setStateError(false);
            setCityError(false);
            setPincodeError(false);
        }
        else{
            setCountry('');
            setState('');
            setCity('')
        }
       } 
       catch(error){
           console.log("Error in fetching Pincode", error)
       }       
    }
    
    return (
        <>
            {showspin ? <Spiner /> :

                <div>
                    <ToastContainer theme="dark" transition={Slide} autoClose={1500} position="top-center" hideProgressBar={true} />
                    <div className="checkoutPage-main">
                        <div className="address-form">
                            <div>
                                <p>CONTACT DETAILS</p>
                                <div>
                                    <input type="text" placeholder="Name*" onChange={(e)=>{setUname(e.target.value);setUnameError(false)}} value={uname}/>
                                    {unameError && <p style={{fontSize: "11px", color: "red", marginBottom: "0px"}}>This field is mandatory.</p>}
                                </div>

                                <div>
                                    <input type="number" placeholder="Mobile Number*" value={mobile} onChange={(e)=>{setMobile(e.target.value); setMobileError(false)}} />
                                    {mobileError && <p style={{fontSize: "11px", color: "red", marginBottom: "0px"}}>This field is mandatory</p>}
                                </div>

                                <p>ADDRESS</p>

                                <div>
                                    <input type="number" placeholder="PinCode*" value={pincode} onChange={handlePincode} />
                                    {pincodeError && <p style={{fontSize: "11px", color: "red", marginBottom: "0px"}}>Please Enter a valid Pincode!</p>}
                                </div>

                                <div>
                                    <input type="text" placeholder="Address (House no, Building, Street, Area*)" value={address} onChange={(e)=>{setAddress(e.target.value); setAddressError(false)}}/>
                                    {addressError && <p style={{fontSize: "11px", color: "red", marginBottom: "0px"}}>This field is mandatory.</p>}
                                </div>

                                <div>
                                    <input type="text" placeholder="Address (Nearby Landmark, Road Name)*"/>
                                </div>

                                <div>
                                    <input type="text" placeholder="Country" value={country} onChange={(e)=>{setCountry(e.target.value);setCountryError(false)}} />
                                    {countryError && <p style={{fontSize: "11px", color: "red", marginBottom: "0px"}}>This field is mandatory.</p>}
                                </div>
                                <div className="city-state">

                                    <div style={{ width: "48%", margin: "initial" }}>
                                        <input style={{ width: "100%" }} type="text" placeholder="City/District" value={city} onChange={(e)=>{setCity(e.target.value); setCityError(false)}} />
                                        {cityError && <p style={{fontSize: "11px", color: "red", marginBottom: "0px"}}>This field is mandatory</p>}
                                    </div>

                                    <div className="address-row" style={{width: "48%", margin: "initial"}}>
                                        <input type="text" placeholder="State*" value={state} onChange={(e)=>{setState(e.target.value); setStateError(false)}} />
                                        {stateError && <p style={{fontSize: "11px", color: "red", marginBottom: "0px"}}>This field is mandatory</p>}
                                    </div>

                                </div>
                                <div>
                                    <p>SAVE ADDRESS AS</p>
                                    <div className="address-type">
                                        <button style={{backgroundColor: place === 'home' ? "black" : "transparent", color: place === 'home' ? 'white' : 'black'}} onClick={()=>{handlePlaceClick('home')}}> <span>Home</span> </button>
                                        <button style={{backgroundColor: place === 'work' ? "black" : "transparent", color: place === 'work' ? "white" : "black"}} onClick={()=>{handlePlaceClick('work')}}> <span>Work</span> </button></div>
                                </div>
                                <div className="checkbox-field">
                                    <input className="checkbox" type="checkbox" />
                                    <span>Make This My Default Address</span>
                                </div>
                                <div className="address-button">
                                    <button type="submit" onClick={handleAddress}>ADD ADDRESS</button>
                                </div>
                            </div>
                        </div>
                        <div className="right-section-checkout">
                            <h6>PRICE DETAILS ({totalUniqueItems} Items) </h6>
                            <div className="price-details-checkout">
                                <div>
                                    <span>Order Total</span>
                                    <span>{cartTotal}</span>
                                </div>
                                <div>
                                    <span>Delivery Charges</span>
                                    <span style={{ color: "#08b708" }}>Free</span>
                                </div>
                                <div>
                                    <span>Total</span>
                                    <span>{cartTotal}</span>
                                </div>

                            </div>
                            <div className="checkout-btn-div">  <button className="checkout-btn" onClick={onNextStep}>Continue to Payment</button></div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export { Checkout }