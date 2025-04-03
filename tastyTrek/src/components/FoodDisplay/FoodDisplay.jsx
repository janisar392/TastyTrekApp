import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = () => {
  const {foodList} = useContext(StoreContext);
  return (
    <div className="container">
      <div className="row">
         {foodList.length > 0 ?(
             foodList.map((food, index) => (
                 <FoodItem key={index} 
                 name={food.name} 
                 description={food.description}
                 id={food.id}
                 imageUrl={food.imageUrl}
                 price={food.price} />
             ))
         ) :(
          <div className="text-center mt-4">
            <h4>No food Found</h4>
          </div>
         )}
      </div>
    </div>
  )
}

export default FoodDisplay;