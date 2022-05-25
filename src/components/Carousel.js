import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselContainer = ( { carouselImg } ) => {

    const settings = {
      autoPlay:false,
      infiniteLoop:true, 
      dynamicHeight:true, 
      showArrows:true, 
      showStatus:false, 
      showIndicators:true, 
      showThumbs:false
    }

  return (
    <div className="single-project__carousel">
        <h3>Screenshots</h3>
        <Carousel {...settings}>
          {
            carouselImg.map( (image, i) => {
              return (
                <div key={i}>
                  <img src={image} alt='Carousel item'/>
                </div>
              )
            })
          }
            </Carousel>
    </div>
  )
}

export default CarouselContainer;