import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carouselvideo from '../Components/CarouselVideo';
import CarouselProduct1 from '../Components/CarouselProduct1';
import CarouselProduct2 from '../Components/CarouselProduct2';

const Home = () => {
  return (
    <Carousel fade>
    <Carousel.Item interval={5000}>
      <Carouselvideo text="First slide" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <button className='buy-now'>Įsigyti</button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={5000}>
      <CarouselProduct1 text="Second slide" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className='buy-now'>Įsigyti</button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={5000}>
      <CarouselProduct2 text="Third slide" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
        <button className='buy-now'>Įsigyti</button>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Home