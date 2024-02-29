import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carouselvideo from '../Components/CarouselVideo';
import CarouselProduct1 from '../Components/CarouselProduct1';
import CarouselProduct2 from '../Components/CarouselProduct2';
import { Link } from 'react-router-dom';

const CarouselSlideshow = () => {
  return (
    <Carousel fade indicatorLabels={['1', '2', '3']}>
      <Carousel.Item interval={5000}>
        <Carouselvideo text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla sadas dasda sdasdas dasda sdasdsa das vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link to='/buy'><button className='buy-now-big'>Įsigyti</button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <CarouselProduct1 text="Second slide" />
        <Carousel.Caption>
          <h3 style={{color: 'white'}}>Second slide label</h3>
          <p style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to='/buy'><button className='buy-now-big'>Įsigyti</button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <CarouselProduct2 text="Third slide" />
        <Carousel.Caption>
          <h3 style={{color: 'white'}}>Third slide label</h3>
          <p style={{color: 'white'}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <Link to='/buy'><button className='buy-now-big'>Įsigyti</button></Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselSlideshow;
