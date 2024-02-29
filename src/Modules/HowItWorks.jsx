import { Link } from 'react-router-dom';
import workpic1 from '../media/video/01.gif';
import workpic2 from '../media/video/02.gif';
import workpic3 from '../media/video/03.gif';
import workpic4 from '../media/video/04.gif';

const HowItWorks = () => {
  return (
    <>
    <div className="heading">
        <h1>How does it work:</h1>
    </div>
    <div className="how-it-works">
        <div className="works">
            <img src={workpic1} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum tempore adipisci aspernatur unde vero in mollitia. Repudiandae, non ipsum dolore eos rerum ad eius, tenetur voluptatem pariatur ab voluptates soluta.</p>
        </div>
        <div className="works">
            <img src={workpic2} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum tempore adipisci aspernatur unde vero in mollitia. Repudiandae, non ipsum dolore eos rerum ad eius, tenetur voluptatem pariatur ab voluptates soluta.</p>
        </div>
        <div className="works">
            <img src={workpic3} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum tempore adipisci aspernatur unde vero in mollitia. Repudiandae, non ipsum dolore eos rerum ad eius, tenetur voluptatem pariatur ab voluptates soluta.</p>
        </div>
        <div className="works">
            <img src={workpic4} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum tempore adipisci aspernatur unde vero in mollitia. Repudiandae, non ipsum dolore eos rerum ad eius, tenetur voluptatem pariatur ab voluptates soluta.</p>
        </div>
    </div>
    <div className="buy-product">
        <div className="prod-bg">
        </div>
            <div className="prod-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto voluptatem molestias obcaecati aliquam ducimus, veniam corrupti at ad magnam, in possimus magni eveniet deserunt quos quasi natus quibusdam quisquam!</p>
                
                <Link to='/buy'><button className='buy-now-big'>Įsigyti</button></Link>
            </div>
    </div>
    </>
  )
}

export default HowItWorks