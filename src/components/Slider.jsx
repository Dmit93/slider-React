import Slide from './Slide';

const Slider = (props) => {
  return (
   <div className="slider" ref={props.widthContainer}>
      <div className="slider_wrapp" style={{transform: `translate3d(-${props.count * props.settings.widthContainer}px, 0px, 0px)`}}>
        {props.data.map( el => {
          return <Slide key={el.id} id={el.id} title={el.title} width={props.settings.widthContainer} margin={props.slideMargin}/>
        })}
      </div>
      <button className="slider_arrow slider_next" onClick={props.sliderNext}>+</button>
      <button className="slider_arrow slider_prev" onClick={props.sliderPrev}>-</button>
   </div>
  );
}

export default Slider;