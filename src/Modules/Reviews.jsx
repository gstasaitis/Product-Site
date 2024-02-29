import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Reviews = () => {

    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ];


    
    const properties = {
        prevArrow:
        <div>
            <button className='arrows'>
                <IoIosArrowBack />
            </button>
        </div>,
        nextArrow: 
        <div>
            <button className='arrows'>
                <IoIosArrowForward />
            </button>
        </div>
    }


  return (
    <div className="reviews">
        <h1>Laimingi klientai</h1>

        <Slide {...properties} slidesToScroll={1} slidesToShow={1} indicators={false} pauseOnHover={true} autoplay={true} duration={3000} responsive={responsiveSettings}>
                <div className="each-slide-effect">
                <div className="review">
                    <div className="customer-name">
                        <h3>Vardas Pavardė</h3>
                    </div>
                    <div className="customer-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ad, assumenda consectetur est, fuga laudantium asperiores praesentium, velit optio non eos dolor cumque? Quam accusantium architecto, praesentium dicta impedit ex.</p>
                        <div className="customer-stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        </div>
                    </div>
            </div>
            </div>
            <div className="each-slide-effect">
            <div className="review">
                    <div className="customer-name">
                        <h3>Vardas Pavardė2</h3>
                    </div>
                    <div className="customer-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ad, assumenda consectetur est, fuga laudantium asperiores praesentium, velit optio non eos dolor cumque? Quam accusantium architecto, praesentium dicta impedit ex.</p>
                        <div className="customer-stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                        <FaRegStar />
                        </div>
                    </div>
            </div>
            </div>
            <div className="each-slide-effect">
            <div className="review">
                    <div className="customer-name">
                        <h3>Vardas Pavardė3</h3>
                    </div>
                    <div className="customer-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ad, assumenda consectetur est, fuga laudantium asperiores praesentium, velit optio non eos dolor cumque? Quam accusantium architecto, praesentium dicta impedit ex.</p>
                        <div className="customer-stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                        </div>
                    </div>
            </div>
            </div>
        </Slide>
    </div>
  )
}

export default Reviews