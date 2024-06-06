import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../contexts/CartContext';
import ContentCard from './ContentCard';
import './Home.css';

const Home = () => {
  const [offerings, setOfferings] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchOfferings = async () => {
      try {
        const response = await axios.get('/api/offerings');
        setOfferings(response.data);
      } catch (error) {
        console.error('Error fetching offerings:', error);
      }
    };

    fetchOfferings();
  }, []);

  return (
    <div className="container">
      <div className="card-container">
        {offerings.map((offering) => (
          <ContentCard key={offering._id} offering={offering} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
