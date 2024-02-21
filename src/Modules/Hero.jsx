import product1Image from '../media/images/pink/6.jpg';
import product2Image from '../media/images/pink/19.png';

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-description">
            <section>
                <div className="image-section">
                    <img src={product2Image} alt="productimg" />
                </div>
                <div className="content">
                    <h1>Content</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, nemo? Eum, fugit voluptate. Fugiat ipsam sunt similique, nemo natus sequi, rem qui dolore totam illo quisquam. Suscipit distinctio ipsum totam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae adipisci tempore temporibus, quisquam omnis architecto fuga fugit cupiditate nulla error soluta porro enim eligendi saepe velit totam repellendus earum molestias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quaerat veritatis consequuntur, libero harum esse ipsam. Voluptate sit ipsa distinctio ad quis, ipsum sunt, ab at porro laborum quo! Tempore, id veniam fugiat dolorum cum ipsa quos. Sint debitis incidunt eaque veniam a assumenda unde reiciendis officiis et repellat autem veritatis, voluptate at sit nulla doloribus maxime impedit? Recusandae laboriosam necessitatibus dicta repudiandae accusamus enim tempore voluptatum fuga saepe eos.</p>
                </div>
            </section>
            <section>
                <div className="content">
                    <h1>Content</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, nemo? Eum, fugit voluptate. Fugiat ipsam sunt similique, nemo natus sequi, rem qui dolore totam illo quisquam. Suscipit distinctio ipsum totam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae adipisci tempore temporibus, quisquam omnis architecto fuga fugit cupiditate nulla error soluta porro enim eligendi saepe velit totam repellendus earum molestias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quaerat veritatis consequuntur, libero harum esse ipsam. Voluptate sit ipsa distinctio ad quis, ipsum sunt, ab at porro laborum quo! Tempore, id veniam fugiat dolorum cum ipsa quos. Sint debitis incidunt eaque veniam a assumenda unde reiciendis officiis et repellat autem veritatis, voluptate at sit nulla doloribus maxime impedit? Recusandae laboriosam necessitatibus dicta repudiandae accusamus enim tempore voluptatum fuga saepe eos.</p>
                </div>
                <div className="image-section">
                    <img src={product1Image} alt="productimg" />
                </div>
            </section>
        </div>
    </div>
  )
}

export default Hero