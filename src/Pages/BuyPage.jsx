import { useState } from 'react';
import productPink from '../media/images/pink/29.jpg';
import productYellow from '../media/images/yellow/19.jpg';
import Footer from '../Modules/Footer';
import { FaShoppingCart } from 'react-icons/fa';

const BuyPage = () => {
    const [selectedColor, setSelectedColor] = useState('pink');

    const [selectedOption, setSelectedOption] = useState({
        color: 'pink',
        quantity: 1,
    });
    
    const handleBuyNow = () => {
        console.log(`Buying ${selectedOption.quantity} product(s) in ${selectedOption.color} color.`);
    };

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    const handleIncrement = () => {
        setSelectedOption((prevOption) => ({
        ...prevOption,
        quantity: prevOption.quantity + 1,
        }));
    };

    const handleDecrement = () => {
        if (selectedOption.quantity > 1) {
        setSelectedOption((prevOption) => ({
            ...prevOption,
            quantity: prevOption.quantity - 1,
        }));
        }
    };

    const selectedProductImage = selectedColor === 'pink' ? productPink : productYellow;


return (
    <>
        <div className="buypage">
            <div className="product-img">
                <img src={selectedProductImage} alt="Product" />
            </div>
            <div className="form-container">
                <h2>Spalva:</h2>
                <select value={selectedColor} onChange={handleColorChange}>
                    <option value="pink">Rožinis</option>
                    <option value="yellow">Geltonas</option>
                </select>
                <h2>Kiekis:</h2>
                <div className="quantity-control">
                    <button onClick={handleDecrement}>-</button>
                    <span>{selectedOption.quantity}</span>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <div className="buy-button">
                    <button onClick={handleBuyNow} className='buy-now-big-shop'><FaShoppingCart /></button>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    );
};

export default BuyPage;
