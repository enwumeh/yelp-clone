import React, { useState, createContext } from 'react';


export const RestaurantContext = createContext();
  const [restaurants, setRestaurants] = useState([])

export const RestaurantContextProvider = props => {


  return  (
    < RestaurantsContext.Provider value={{ restaurants, setRestaurants }}>
    {props.children}
   </RestaurantsContext.Provider>

  )
}