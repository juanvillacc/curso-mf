import React from 'react'
import { useFavColorListStore } from 'store/store';
import { incrementFavColorsCount } from '../features/favColorList/favColorListSlice';


const Colorlist = ({colorsList = []}) => {
  
const {incrementFavColorsCount, favColorsCount} =  useFavColorListStore();

  const handleClick = (e) =>{
    e.preventDefault();
    incrementFavColorsCount();
  
  }

  return (
    <>
    <div className='list-group text-center'>
{ colorsList.map((color, index)=>         
       <button  id = {'button-'+index}
          onClick={handleClick}
          key={index} className='list-group-item list-group-item-action'
            style={{background:color,
                    color: "white"
        }}
    >
            {color}
        </button>
         )}
    </div>
    <div>
       <h1>You selected:  {favColorsCount}</h1>
    </div>

    </>
  )
}

export default Colorlist
