import './App.css';
import data from './data_slide.json';
import React,{useRef, useEffect, useState} from 'react';
import Slider from './components/Slider';



const SliderBox = ({
  slideCount = 1,
  slideMargin = 0
}) => {
  const [settings, setSettings] = useState({});
  const [count, setCount] = useState(0);

  const widthContainer = useRef(null);
  const showDivWidth = () => {
    setSettings(
      {
        widthContainer: widthContainer.current.getBoundingClientRect().width / slideCount,
        countSlide: widthContainer.current.querySelectorAll('.slider__slide').length / slideCount
      }
      );
 }

 useEffect(() => {
  showDivWidth();
 }, [settings.widthContainer, settings.countSlide]);


 const sliderNext = () => {
  let countCurrent;
  if (slideCount > 1){
    countCurrent =  Math.ceil(settings.countSlide);
  } else {
    countCurrent = settings.countSlide - 1;
  }

  if (count < countCurrent) setCount(count + 1)    
}
 
 const sliderPrev = () => count !== 0 ? setCount(count - 1) : '';

  return (
    <Slider  
      data={data}
      widthContainer={widthContainer} 
      count={count} 
      slideMargin={slideMargin}  
      sliderNext={() => sliderNext()} 
      sliderPrev={() => sliderPrev()}
      settings={settings}
      />
  );
}

export default SliderBox;
