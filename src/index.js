import React from 'react';
import ReactDOM from 'react-dom/client';
import SliderBox from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SliderBox 
      slideCount={3}
      slideMargin={20}
    />
);
