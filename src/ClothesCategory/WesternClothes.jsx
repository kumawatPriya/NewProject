import React, { useEffect, useState } from "react";
import "./western.css"
import { westernClothes } from "./FilterWestern";
import { Link } from "react-router-dom";
import clearfilterimg from "../Media/clearFilter.png"

function WesternClothes(props) {

    const [Filter, setFilter] = useState([...westernClothes]);

    // Search Functionality =========================================================

    useEffect(() => {
        if (props.inputValue !== '') {
            changeGoods(props.inputValue)
        }
        else if (props.inputValue === 0) {
            setFilter(westernClothes)
        }
        else {
            setFilter(westernClothes)
        }
    }, [props.inputValue])

    const changeGoods = (e) => {
        const getGoods = e
        const updateGoods = westernClothes.filter((item) => item.category.toLowerCase().startsWith(getGoods))
        if (getGoods) {
            setFilter(updateGoods)
        }
        else {
            setFilter(westernClothes)
        }
    }

    // Filter Functionality ==============================================================
    const [click, setClick] = useState(false)
    const [click1, setClick1] = useState(false)
    const [click2, setClick2] = useState(false)
    const [click3, setClick3] = useState(false)
    const [click4, setClick4] = useState(false)
    const [click5, setClick5] = useState(false)
    const [click6, setClick6] = useState(false)
    const [click7, setClick7] = useState(false)
    const [click8, setClick8] = useState(false)
    const [click9, setClick9] = useState(false)
    const [click10, setClick10] = useState(false)
    const [click11, setClick11] = useState(false)
    const [click12, setClick12] = useState(false)
    const [click13, setClick13] = useState(false)
    const [click14, setClick14] = useState(false)
    const [click15, setClick15] = useState(false)
    const [click16, setClick16] = useState(false)
    const [click17, setClick17] = useState(false)
    const [click18, setClick18] = useState(false)
    const [click19, setClick19] = useState(false)
    const [click20, setClick20] = useState(false)
    const [click21, setClick21] = useState(false)
    const [click22, setClick22] = useState(false)
    const [click23, setClick23] = useState(false)
    const [click24, setClick24] = useState(false)
    const [click25, setClick25] = useState(false)
    const [click26, setClick26] = useState(false)
    const [click27, setClick27] = useState(false)
    const [click28, setClick28] = useState(false)

    const handleCheck = () => {
        setClick(!click)
    }
    const handleCheck1 = () => {
        setClick1(!click1)
    }
    const handleCheck2 = () => {
        setClick2(!click2)
    }
    const handleCheck3 = () => {
        setClick3(!click3)
    }
    const handleCheck4 = () => {
        setClick4(!click4)
    }
    const handleCheck5 = () => {
        setClick5(!click5)
    }
    const handleCheck6 = () => {
        setClick6(!click6)
    }
    const handleCheck7 = () => {
        setClick7(!click7)
    }
    const handleCheck8 = () => {
        setClick8(!click8)
    }
    const handleCheck9 = () => {
        setClick9(!click9)
    }
    const handleCheck10 = () => {
        setClick10(!click10)
    }
    const handleCheck11 = () => {
        setClick11(!click11)
    }
    const handleCheck12 = () => {
        setClick12(!click12)
    }
    const handleCheck13 = () => {
        setClick13(!click13)
    }
    const handleCheck14 = () => {
        setClick14(!click14)
    }
    const handleCheck15 = () => {
        setClick15(!click15)
    }
    const handleCheck16 = () => {
        setClick16(!click16)
    }
    const handleCheck17 = () => {
        setClick17(!click17)
    }
    const handleCheck18 = () => {
        setClick18(!click18)
    }
    const handleCheck19 = () => {
        setClick19(!click19)
    }
    const handleCheck20 = () => {
        setClick20(!click20)
    }
    const handleCheck21 = () => {
        setClick21(!click21)
    }
    const handleCheck22 = () => {
        setClick22(!click22)
    }
    const handleCheck23 = () => {
        setClick23(!click23)
    }
    const handleCheck24 = () => {
        setClick24(!click24)
    }
    const handleCheck25 = () => {
        setClick25(!click25)
    }
    const handleCheck26 = () => {
        setClick26(!click26)
    }
    const handleCheck27 = () => {
        setClick27(!click27)
    }
    const handleCheck28 = () => {
        setClick28(!click28)
    }
    // for filter All Products ==================================================
    const filterAllItems = ()=>{
        
        setFilter(westernClothes)
    }

    // for filter women clothes ================================================== 

    const filterAllWomenItems = () => {
        const allWomenItems = westernClothes.filter(goods => goods.type === "WOMEN")
        setFilter(allWomenItems)
    }
    const filterWomenCategory = (e) => {
        const womenCategory = westernClothes.filter(goods => goods.categoryf === e)
        setFilter(womenCategory)
    }
    // for filter by clicking on Checkbox(Women) ========================================
    const fetchWomenClothes = (e) => {
        const fetchByCheck = westernClothes.filter(goods => goods.categoryf === e)
        setFilter(fetchByCheck)
    }

    const fetchCheckFabric = (e) => {
        const fetchfabric = westernClothes.filter(goods => goods.fabric === e)
        setFilter(fetchfabric)
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling animation
        });
    } 

    const fetchCheckColor = (e)=>{
        const fetchColor = westernClothes.filter(goods => goods.color === e);
        setFilter(fetchColor)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    // for filter by clicking on Checkbox(Men) =========================================
    const fetchMenClothes = (e)=>{
        const fetchMenCheck = westernClothes.filter(goods => goods.categoryf === e)
        setFilter(fetchMenCheck)
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling animation
        });
    }

    // for filter men clothes ====================================================

    const filterAllMenItems = () => {
        const allMenItems = westernClothes.filter(goods => goods.type === "MEN")
        setFilter(allMenItems)
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling animation
        });

    }

    const filterMenCategory = (e) => {
        const allMenItems = westernClothes.filter(goods => goods.categoryf === e)
        setFilter(allMenItems)
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling animation
        });
    }

    const handleFabric = (e) => {
        const fetchFabric = westernClothes.filter(goods => goods.fabric === e)
        setFilter(fetchFabric)
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling animation
        });
    }

    const handleColor = (e) => {
        const fetchColor = westernClothes.filter(goods => goods.color === e)
        setFilter(fetchColor)
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling animation
        });
    }

    // Functoinality for Sort By Price ================================================

    const under299 = ()=>{
        const itemUnder300 = westernClothes.filter(goods => goods.price<299);
        setFilter(itemUnder300)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  const under499 = ()=>{
    const itemunder500 = westernClothes.filter(goods =>  goods.price >= 300 && goods.price <= 500);
    setFilter(itemunder500)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }

  const between500to1000 = ()=>{
    const fetchBetween500to1000 = westernClothes.filter(goods => goods.price >= 500 && goods.price<= 1000);
    setFilter(fetchBetween500to1000)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }

  const between1000to1500 = ()=>{
    const fetchBetween1000to1500 = westernClothes.filter(goods => goods.price >= 1000 && goods.price <= 1500);
    setFilter(fetchBetween1000to1500)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }

  const between1500to2000 = ()=>{
    const fetchBetween1500to2000 = westernClothes.filter(goods => goods.price >= 1500 && goods.price <= 2000);
    setFilter(fetchBetween1500to2000)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }

  const over2000 = ()=>{
    const fetchOver2000 = westernClothes.filter(goods => goods.price >= 2000)
    setFilter(fetchOver2000)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }

  const reloadPageToTop = ()=>{
    window.scrollTo({
        top: 0,
        behavior: "instant"
    })
  }
    return (
        <>
            <div className="fliter-products-bx">

                <div className="filter-bx">
                    <div className="title"><h5>Fliters </h5>
                  <div className="hover-text"> <div> <img className="remove-filter-img" src={clearfilterimg} alt="" onClick={filterAllItems} /></div>
                 <span className="clear-filter-text">Clear Filter</span>
                  </div>
                        <p>Total Items - {Filter.length}</p>
                    </div>
                    <div className="filter-type">
                        <p style={{ width: "118px" }}>Filter By Category</p>
                        <div className="women-categories">
                            <h6>Women's</h6>
                            <div>
                                <input type="checkbox" checked={click} onChange={() => { setClick(!click); filterAllWomenItems() }} />
                                <span onClick={() => { filterAllWomenItems(); handleCheck() }}>All</span>
                            </div>
                            <div>
                                <input type="checkbox" checked={click1} onChange={() => { setClick1(!click1); fetchWomenClothes('womenTshirt') }} />
                                <span onClick={() => { filterWomenCategory('womenTshirt'); handleCheck1() }}>T-shirt</span>
                            </div>
                            <div>
                                <input type="checkbox" checked={click2} onChange={() => { setClick2(!click2); fetchWomenClothes('Topwear') }} />
                                <span onClick={() => { filterWomenCategory('Topwear'); handleCheck2() }}>Topwear</span>
                            </div>
                            <div>
                                <input type="checkbox" checked={click3} onChange={() => {setClick3(!click3);fetchWomenClothes('Dress')}}/>
                                <span onClick={() => { filterWomenCategory('Dress'); handleCheck3() }}>Dresses</span>
                            </div>
                            <div>
                                <input type="checkbox" checked={click4} onChange={() => {setClick4(!click4);fetchWomenClothes('Cord-Set')}} />
                                <span onClick={() => { filterWomenCategory('Cord-Set'); handleCheck4() }}>Co-ord Set</span>
                            </div>
                            <div>
                                <input type="checkbox" checked={click5} onChange={() => {setClick5(!click5);fetchWomenClothes('womenSweatshirt')}} />
                                <span onClick={() => { filterWomenCategory('womenSweatshirt'); handleCheck5() }}>Sweatshirt & Hoddies</span>
                            </div>
                            <div>
                                <input type="checkbox" checked={click6} onChange={() => {setClick6(!click6);fetchWomenClothes('Shawl')}} />
                                <span onClick={() => { filterWomenCategory('Shawl'); handleCheck6() }}>Shawl's</span>
                            </div>
                        </div>
                        <div className="men-categories">
                            <h6>Men's</h6>
                            <div>
                                <input type="checkbox" checked={click7} onChange={() => {setClick7(!click7);filterAllMenItems()}} />
                                <span onClick={() => { filterAllMenItems(); handleCheck7() }}>All</span>
                            </div>
                            <div>
                                <input type="checkbox" checked={click8} onChange={() => {setClick8(!click8);fetchMenClothes('menTshirt')}} />
                                <span onClick={() => { filterMenCategory('menTshirt'); handleCheck8() }}>T-shirt</span>
                            </div>
                            <div>
                                <input type="checkbox" checked={click9} onChange={() => {setClick9(!click9);fetchMenClothes('Shirt')}} />
                                <span onClick={() => { filterMenCategory('Shirt'); handleCheck9() }}>Shirts</span>
                            </div>
                            <div>
                                <input type="checkbox" checked={click10} onChange={() => {setClick10(!click10);fetchMenClothes('menSweatshirt')}} />
                                <span onClick={() => { filterMenCategory('menSweatshirt'); handleCheck10() }}>Sweatshirt & Hoddies</span>
                            </div>
                            <div>
                                <input type="checkbox" checked={click11} onChange={() => {setClick11(!click11); fetchMenClothes('Jacket')}} />
                                <span onClick={() => { filterMenCategory('Jacket'); handleCheck11() }}>Jacket</span>
                            </div>
                        </div>
                    </div>
                    <div className="filter-type">
                        <p style={{ width: "106px" }}>Filter By Fabric</p>
                        <div>
                            <input type="checkbox" checked={click12} onChange={() => {setClick12(!click12);fetchCheckFabric('rayon')}} />
                            <span onClick={() => { handleFabric('rayon'); handleCheck12() }}>Rayon</span>
                        </div>
                        <div>
                            <input type="checkbox" checked={click13} onChange={() => {setClick13(!click13);fetchCheckFabric('silk')}} />
                            <span onClick={() => { handleFabric('silk'); handleCheck13() }}>Silk</span>
                        </div>
                        <div>
                            <input type="checkbox" checked={click14} onChange={() => {setClick14(!click14); fetchCheckFabric('cotton')}} />
                            <span onClick={() => { handleFabric('cotton'); handleCheck14() }}>Cotton</span>
                        </div>
                        <div>
                            <input type="checkbox" checked={click15} onChange={() => {setClick15(!click15);fetchCheckFabric('cotton-blend')}} />
                            <span onClick={() => { handleFabric('cotton-blend'); handleCheck15() }}>Cotton Blend</span>
                        </div>
                        <div>
                            <input type="checkbox" checked={click16} onChange={() => {setClick16(!click16); fetchCheckFabric('Polyester')}} />
                            <span onClick={() => { handleFabric('Polyester'); handleCheck16() }}>Polyester</span>
                        </div>
                    </div>
                    <div className="filter-type">
                        <p style={{ width: "106px" }}>Filter By Color</p>
                        <div>
                            <input type="checkbox" checked={click17} onChange={() => {setClick17(!click17);fetchCheckColor('maroon')}} />
                            <span onClick={() => { handleColor('maroon'); handleCheck17() }}>Maroon</span>
                        </div>
                        <div>
                            <input type="checkbox" checked={click18} onChange={() => {setClick18(!click18);fetchCheckColor('navy')}} />
                            <span onClick={() => { handleColor('navy'); handleCheck18() }}>Navy Blue</span>
                        </div>
                        <div>
                            <input type="checkbox" checked={click19} onChange={() => {setClick19(!click19);fetchCheckColor('green')}} />
                            <span onClick={() => { handleColor('green'); handleCheck19() }}>Green</span>
                        </div>
                        <div>
                            <input type="checkbox" checked={click20} onChange={() => {setClick20(!click20);fetchCheckColor('black')}} />
                            <span onClick={() => { handleColor('black'); handleCheck20() }}>Black</span>
                        </div>
                        <div>
                            <input type="checkbox" checked={click21} onChange={() => {setClick21(!click21);fetchCheckColor('brown')}} />
                            <span onClick={() => { handleColor('brown'); handleCheck21() }}>Brown</span>
                        </div>
                        <div>
                            <input type="checkbox" checked={click22} onChange={() => {setClick22(!click22);fetchCheckColor('purple')}} />
                            <span onClick={() => { handleColor('purple'); handleCheck22() }}>Purple</span>
                        </div>
                    </div>
                    <div className="sort-by-price">
                        <h5>Sort By Price</h5>
                        <div>
                            <input type="checkbox" checked={click23} onChange={()=>{setClick23(!click23);under299()}} />
                            <span onClick={()=>{under299();handleCheck23()}}>Under ₹299</span>
                        </div>
                        <div>
                            <input type="checkbox" checked={click24} onChange={()=>{setClick24(!click24);under499()}} />
                            <span onClick={()=>{under499();handleCheck24()}}>₹300 - ₹500</span>
                        </div>
                        <div>
                            <input type="checkbox" checked={click25} onChange={()=>{setClick25(!click25);between500to1000()}}  />
                            <span onClick={()=>{between500to1000();handleCheck25()}}>₹500 - ₹1000</span>
                        </div>
                        <div>
                            <input type="checkbox" checked={click26} onChange={()=>{setClick26(!click26);between1000to1500()}} />
                            <span onClick={()=>{between1000to1500();handleCheck26()}}>₹1000 - ₹1500</span>
                        </div>
                        <div>
                            <input type="checkbox" checked={click27} onChange={()=>{setClick27(!click27);between1500to2000()}} />
                            <span onClick={()=>{between1500to2000();handleCheck27()}}>₹1500 - ₹2000</span>
                        </div>
                        <div>
                            <input type="checkbox" checked={click28} onChange={()=>{setClick28(!click28);over2000()}} />
                            <span onClick={()=>{over2000();handleCheck28()}}>Over ₹2000</span>
                        </div>
                    </div>
                </div>
                <div className="item-bx-main">
                    {
                        Filter.map((data, index) => {
                            return (
                                <>

                                    <div key={index} className="item-bx">
                                        <Link to={`/details/${data.id}`} onClick={reloadPageToTop}>
                                            <div className="women-img-container">
                                                <img className="image2" src={data.image2} alt="" />
                                                <img className="image1" src={data.image} alt="" />
                                            </div>
                                            <div className="bx-content">
                                                <p className="label">{data.label}</p>
                                                <h6 className="specific-name">{data.productType}</h6>
                                                <p className="category">{data.category}</p>
                                                <div className="item-price">
                                                    <h6>Rs.{data.price}</h6>
                                                    <p>{data.pastPrice}</p>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export { WesternClothes }