import React from "react";
import { ProductBar, SearchBar } from "../ClothesCategory/SearchBar";

function Ethnics() {
    return (
        <>
            <div className='search-bar-sticky'>
                <SearchBar/>
            </div>
            <div>
                <ProductBar/>
            </div>
        </>
    )
}

export { Ethnics }