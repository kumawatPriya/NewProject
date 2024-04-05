import React from "react";


function BottomFooter(){
    const footer = [
        {
            title: "ABOUT GlamWEAR",
            text: "About Us",
            text1: "The Circle",
            text2: "Stores",
            text3: "Press"
        },
        {
            title: "QUICK LINKS",
            text: "Shipping Info",
            text1: "My Account",
            text2: "Style Flies",
            text3: "Styling"
        },
        {
            title: "SHOP",
            text: "Clothing",
            text1: "Footwear",
            text2: "Bags",
            text3: "Watches"
        },
        {
            title: "CUSTOMER CARE",
            text: "Privacy Policy",
            text1: "Terms and Conditions",
            text2: "Gift Cards",
            text3: "Return & Exchange"
        }
    ]
    return(
        <>
        
        <div className="bottom-footer-sec">
            {
                footer.map((data)=>{
                    return(
                        <>
                        <div className="content">
                            <h6>{data.title}</h6>
                            <div>
                                <ul>
                                    <li>{data.text}</li>
                                    <li>{data.text1}</li>
                                    <li>{data.text2}</li>
                                    <li>{data.text3}</li>
                                </ul>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
        <div className="content-1">
            
                <h6>CONTACT US</h6>
                <div>
                <ul>
                    <li><i class="fa-solid fa-phone"></i> &nbsp; <a href="Tel:9636843365">9636843365</a></li>
                    <li><i class="fa-solid fa-envelope"></i> &nbsp; <a href="mailto:priyakumawat9468@gmail.com">glamwear@gmail.com</a></li>
                </ul></div>
                <div>
                    <p>MONDAY TO SATURDAY - 24HOURS</p>
                    <p>SUNDAY - 10AM TO 6PM</p>
                </div>
                
            
        </div>
        </>
    )
}

export {BottomFooter}