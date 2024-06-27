import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FoodDetail = () => {
  const { id } = useParams();
  const [foodItem, setFoodItem] = useState(null);
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5001';

  useEffect(() => {
    const fetchFoodDetail = async () => { 
      try {
        const response = await axios.get(`${backendUrl}/api/foods/${id}`);
        setFoodItem(response.data);
      } catch (error) {
        console.error('Error fetching food detail', error.response || error.message);
      }
    };

    fetchFoodDetail();
  }, [id]);

  if (!foodItem) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{foodItem.title}</h1>
      <img src={foodItem.imageUrl} alt={foodItem.title} />
      <p>{foodItem.content}</p>
    </div>
  );
};

export default FoodDetail;
