import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category, searchText}) => {
  const {foodList} = useContext(StoreContext);
  const filteredFood = foodList.filter(food => (
     (category === 'All' || food.category === category) && 
     food.name.toLowerCase().includes(searchText.toLowerCase())
  ));
  return (
    <div className="container">
      <div className="row">
         {filteredFood.length > 0 ?(
             filteredFood.map((food, index) => (
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