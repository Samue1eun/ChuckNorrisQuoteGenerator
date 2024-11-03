import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';

const FetchData = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState('');

    const fetchDataRandom = async() => {
        try{
            const response = await axios.get('https://api.chucknorris.io/jokes/random');
            setData(response.data);
            console.log('button was clicked!');
            console.log(response.data);
        } catch (error) {
            setError(error);
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const fetchDataCategories = async (event) => {
        try {
            const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
            setData(response.data);
            console.log('button was clicked!');
            console.log(response.data);
            ;
        } catch (error) {
            setError(error.message);
            console.log(error.message);
        } finally {
            setLoading(false);
        }
        setCategory('')
    };

    // runs only once and whenever the webpage opens
    useEffect(() => {
        fetchDataRandom();
    }, []);
    return {
        data,
        error,
        loading,
        category,
        setCategory,
        fetchDataRandom,
        fetchDataCategories,
    };
}

export default FetchData