import React, { useState } from "react";
import './loginPage.css';
import googleImg from "../Media/google-logo.jpeg"
import { Link, useNavigate } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import { LoadingSpinner } from "../Spiner/LoadingSpinner";
import { auth,provider } from "./Google";


function LoginPage() {

    const handleGoogleLogin = ()=>{
        auth.signInWithPopup(provider).catch(alert)
    }

    const nav = useNavigate()

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [emailError, setEmailError] = useState(false);
    const [verifyError, setVerifyError ] = useState(false);
    const [passError, setPassError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = ()=>{
        const verify = /\S+@\S+\.\S+/;
        return verify.test(email)
    }

    const handleLogin = () => {
        if (email === '') {
            setEmailError(true)
            setVerifyError(false)
        }
        if(email === '' && pass === ''){
            setEmailError(true)
            setPassError(false)
        }
        else if(!validateEmail(email)){
            setEmailError(false)
            setVerifyError(true)
        }
        else if(pass === ''){
            setPassError(true)
            setVerifyError(false)
        }

       else if(pass !== ''){
            setPassError(false)
            toast.success('You have been login successfully')
            setIsLoading(true)
            setTimeout(()=>{
                nav( '/')
               },1500)
        }
        
        else{
            setVerifyError(false)

        }


    }


    return (
        <>
            <ToastContainer theme="dark" autoClose={1500} transition={Slide} position="top-center" hideProgressBar={true}/>
            <div className="login_main">
            <div className="loginPage">
                <div className="login-bx">
                    <p className="sign-in-text">SIGN IN TO</p>
                    <div className="loginPg-logo">
                        <span className="glam" style={{ fontSize: "26px", letterSpacing: "1.5px" }}>Glam</span>
                        <span className="attire" style={{ fontSize: "18px", letterSpacing: "0.4px" }}>WEAR</span>
                    </div>
                    <div className="fb-google-links">
                        <p>SIGN IN WITHOUT A PASSWORD</p>
                        <div>
                            <button>
                               <a href="https://www.facebook.com"> <span><i class="fa-brands fa-square-facebook"></i></span>FACEBOOK</a></button>
                            <button onClick={handleGoogleLogin}>
                                <img className="google-img" src={googleImg} alt="" />
                                GOOGLE</button>
                        </div>
                    </div>
                    <div>
                        <p style={{ marginTop: "20px" }}>- OR -</p>
                    </div>
                    <div className="email-sec">
                        <div><input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} /></div>

                        <div><input type="text" placeholder="Password" value={pass} onChange={(e)=>setPass(e.target.value)} /></div>
                    
                       {/* for Errors */}

                       { emailError && <p style={{fontSize: "12px", color: "red", marginBottom: "2px"}}>Email can't be empty.</p> }
                       { verifyError && <p style={{fontSize: "12px", color: "red", marginBottom: "2px"}}>Please Enter a valid email address!</p>}
                       {passError && <p style={{fontSize: "12px", color: "red", marginBottom: "2px"}}>Password can't be empty.</p>}
                    
                        <div>
                         {isLoading? <button><LoadingSpinner/></button>:   <button onClick={handleLogin}>Sign In</button>}
                        </div>
                        <div className="forgot-password-text">
                            <p>Forgot Password?</p>
                            <div>
                                <span>New User?</span>
                                <span className="sign-up-btn">
                                    <Link to="/signup"> SIGN UP</Link>
                                </span>
                            </div>
                        </div>
                        <div className="back-to-home-link">
                            <Link to="/"><i class="fa-solid fa-arrow-left"></i>&nbsp; Back To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export { LoginPage }