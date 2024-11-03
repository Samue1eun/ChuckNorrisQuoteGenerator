import InputField from './components/Input';
import Buttons from './components/Buttons';
import FetchData from './hooks/FetchData.jsx';
import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react'
import './App.css'

const ChuckNorrisApp = () => {

  const {
    data,
    error,
    loading,
    category,
    setCategory,
    fetchDataRandom,
    fetchDataCategories,
  } = FetchData();

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
      {/* <button className="function-test-quote-button-random" onClick={fetchDataRandom}>random quote</button> */}
      {/* <button className="function-test-quote-button-category" onClick={fetchDataCategories}>categories</button> */}
      <Buttons fetchDataCategories={fetchDataCategories} /> {/* Passed as a prop */}
    </div>
 
    </>
  )
}

export default ChuckNorrisApp;
