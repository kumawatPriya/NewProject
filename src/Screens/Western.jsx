import React, { useEffect, useState } from 'react'
import { WesternClothes } from '../ClothesCategory/WesternClothes'
import { ProductBar, SearchBar } from '../ClothesCategory/SearchBar'
import { BottomFooter } from '../FooterContent/BottomFooter';
import { Copyright } from '../FooterContent/Copyright';
import { MiddleFooter } from '../FooterContent/MiddleFooter';
import { Spiner } from '../Spiner/Spiner';

function Western() {

  
  // state for Spinner ------------------------------
  const [showspin,setShowspin] = useState(true);

 useEffect(()=>{
  setTimeout(()=>{
  setShowspin(false)
  },600)
 })


  const [value,setValue] = useState();

  const getInputValue = (Filter)=>{
     setValue(Filter)
  }
  return (
    <>
{showspin ? <Spiner/> :
<div>
     <div className='search-bar-sticky'>
      <SearchBar send={getInputValue}/>
     </div>
     <div>
      <ProductBar/>
     </div>
    <div className="western-main"><WesternClothes inputValue={value}/></div>
 <MiddleFooter/>
    <div className="bottom-footer-main"><BottomFooter/> </div>
      <div><Copyright/></div>
      </div>}
    </>
  )
}

export default Western
