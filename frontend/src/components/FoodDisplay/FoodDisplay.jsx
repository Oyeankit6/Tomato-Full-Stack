/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./FoofDisplay.css";
import { StoreContext } from "../Context/StoreContext";
import FoodItem from "../Fooditem/FoodItem";
import { Shimmer } from "../Shimmer/Shimmer";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);


  if(food_list.length===0){
    return (<><Shimmer/></>)
  }
  return (
    <div className="food-display" id=" food-display">
      <h2>Top Dishes for you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
