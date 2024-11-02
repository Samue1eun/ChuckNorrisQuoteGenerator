import InputField from './components/Input';
import Buttons from './components/Buttons';
import React from 'react';
import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'

function ChuckNorrisApp() {
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const [category, setCategory] = useState('');

  const fetchDataRandom = async() => {
    try{
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    // } finally {
    //   setLoading(false);
    // loading spinner in case I want one
    }
  };

  const fetchDataCategories = async (event) => {
    try {
      const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
      setData(response.data);
      console.log('button was clicked!');
      console.log(response.data);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };




  return (
    <>
    <div className="quote-container">
      <div className="quote">
        <p>{data.value}</p>
      </div>
    </div>
    <div className="input-and-generator-container">
      {/* <InputField /> */}
      <input 
      className="test-input-field-categories"
      placeholder="categories"
      type="text"
      value={category}
      onChange={event => setCategory(event.target.value)}
      />
      <br></br>
      <br></br>
      <button className="function-test-quote-button-random" onClick={fetchDataRandom}>random quote</button>
      <button className="function-test-quote-button-category" onClick={fetchDataCategories}>categories</button>
      {/* <Buttons /> */}
    </div>
 
    </>
  )
}

export default ChuckNorrisApp
