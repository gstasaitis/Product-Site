import { IoMdArrowRoundForward } from "react-icons/io";
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaMapMarkedAlt, FaPhoneAlt, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-divider">
            <div className="footer-left">
                <div className="logo">
                    
                </div>
                <h5>Receive the latest articles, tips, and offers from us!</h5>
                <form action="#" method="post">
                    <div className="form-group">
                        <input placeholder="Email Address" type="email" id="email" name="email" required/>
                        <button className="subscribe" type="submit"><IoMdArrowRoundForward /></button>
                    </div>
                </form>
                <p>We care about protecting your data.
                    <br />
                    Read more in our <a href="">Privacy Policy.</a></p>
                    © 2024 LactoMore. All Rights Reserved.
            </div>
            <div className="footer-right">
                <div className="footer-socials">                
                        <a href=""><FaInstagram /> </a>
                        <a href=""><FaFacebookSquare /> </a>
                        <a href=""><FaSquareXTwitter /> </a>
                        <a href=""><FaTiktok /> </a>
                </div>
                <div className="footer-contacts">
                    <p><FaPhoneAlt /> +370 612 3123 12</p>
                    <p><MdEmail /> info@lactamore.com</p>
                    <p><FaMapMarkedAlt /> Gatve 15a Vilnius, Lithuania.</p>                            
                </div>
                <div className="footer-list">
        </div>
                    <ul>
                    <Link to='/termsandconditions'>
                        <li><a href="">Terms & Conditions</a></li>
                        </Link>
                    
                        <li><a href="">Privacy policy</a></li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default Footer