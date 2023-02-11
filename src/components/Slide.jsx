const Slide = ({id, title, width, margin}) =>{
  return(
    <div className={`slider__slide slide-${id}`} style={{width: width, marginRight: margin}}>
        <p className="slider__title">{title}</p>
    </div>
  );
}

export default Slide;