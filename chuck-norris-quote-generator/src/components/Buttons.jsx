import React from 'react';
import Button from 'react-bootstrap/Button';
// import FetchData from '../hooks/FetchData.jsx';

function Buttons({ fetchDataCategories }) {
    return (
    <>
        <Button className="function-test-quote-button-category" 
        onClick={fetchDataCategories} 
        variant="outline-light"
        >
        Search for a Chuck-le
        </Button>
    </>
    );

}

export default Buttons;

// chuck-norris-quote-generator/src/hooks/FetchData.jsx