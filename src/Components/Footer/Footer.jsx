import './Footer.css'
import Button from './Button'
import Download from './Download'
import Line from './Line'
import Popular from './Popular'

import facebook from './../../img/facebook.svg'
import instagram from './../../img/instagram.svg'
import twitter from './../../img/twitter.svg'
import linkedin from './../../img/linkedin.svg'
import playmarket from './../../img/playmarket.svg'
import appstore from './../../img/appstore.svg'

function Footer() {
    return(
        <div className='footer'>
            <div className='footer-information'>
                <div className='footer-information-block'>
                    <h2 className='footer-information-block-name'>Need Help</h2>
                    <p className='footer-information-block-link'>Contact Us</p>
                    <p className='footer-information-block-link'>Track Order</p>
                    <p className='footer-information-block-link'>Returns & Refunds</p>
                    <p className='footer-information-block-link'>FAQ's</p>
                    <p className='footer-information-block-link'>Career</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div className='footer-information-socials'>
                        <Button src={facebook}/>
                        <Button src={instagram}/>
                        <Button src={twitter}/>
                        <Button src={linkedin}/>
                    </div>
                </div>
                <div className='footer-information-block'>
                    <h2 className='footer-information-block-name'>Company</h2>
                    <p>About Us</p>
                    <p>euphoria Blog</p>
                    <p>euphoriastan</p>
                    <p>Collaboration</p>
                    <p>Media</p>
                </div>
                <div className='footer-information-block'>
                    <h2 className='footer-information-block-name'>More Info</h2>
                    <p>Term and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Shipping Policy</p>
                    <p>Sitemap</p>
                </div>
                <div className='footer-information-block'>
                    <h2 className='footer-information-block-name'>Location</h2>
                    <p>support@euphoria.in</p>
                    <p>Eklingpura Chouraha, Ahmedabad Main Road</p>
                    <p>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>Download The App</h2>
                    <div className='footer-information-block-download'>
                        <Download src={playmarket}/>
                        <Download src={appstore}/>
                    </div>
                </div> 
            </div>
            <Line/>
            <Popular/>
            <Line/>
            <div className='footer-information-copyright'>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</div>
        </div>
    );
}

export default Footer;