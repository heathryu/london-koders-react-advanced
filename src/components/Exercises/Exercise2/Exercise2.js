import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FoodList = () => {
  // Beginning of logic to abstract away
  const [food, setFood] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/food')
      .then((response) => setFood(response.data));
  }, []);
  // end of logic to abstract away

  return (
    <ul>
      {food.length
        ? food.map((food) => <li>{food}</li>)
        : "No Food found here. 🤔 If it doesn't show up soon, check if you have the json server running!"}
    </ul>
  );
};

export default FoodList;
