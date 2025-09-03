import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'


const FoodDisplay = ({ category }) => {
  const { foodList } = useContext(StoreContext)

  if(!foodList || foodList.length === 0) {
    return (
      <div className="food-display-loader">
         <div className='spinner'></div>
         <p>Please wait a moment</p>
      </div>
    )
  }
  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes near you</h2>
      <div className="display-food-list">
        {foodList.map((items, index) => {
          if (category === 'All' || category === items.category) {
            return <FoodItem key={index} id={items._id} name={items.name} image={items.image} price={items.price} description={items.description} />
          }

        })}
      </div>

    </div>
  )
}

export default FoodDisplay
