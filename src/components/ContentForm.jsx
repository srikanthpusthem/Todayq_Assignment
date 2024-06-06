import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './ContentForm.css';

const ContentForm = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [views, setViews] = useState('');
  const [locations, setLocations] = useState('');
  const [rating, setRating] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [logo, setLogo] = useState(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('link', link);
    formData.append('views', views);
    formData.append('locations', locations);
    formData.append('rating', rating);
    formData.append('type', type);
    formData.append('price', price);
    if (logo) {
      formData.append('logo', logo);
    }

    try {
      await axios.post('/api/offerings', formData);
      alert('Content offering submitted successfully!');
      history.push('/');
    } catch (error) {
      console.error(error);
      alert('Error submitting content offering.');
    }
  };

  return (
    <div className="content-form-container">
      <button className="back-button" onClick={() => history.push('/')}>
        &larr; Back
      </button>
      <h2>Submit Offerings</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Views"
          value={views}
          onChange={(e) => setViews(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Locations (comma separated)"
          value={locations}
          onChange={(e) => setLocations(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setLogo(e.target.files[0])}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContentForm;
