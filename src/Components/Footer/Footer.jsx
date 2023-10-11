import './Footer.css';
import Button from './Button';
import Download from './Download';
import Line from './Line';
import Popular from './Popular';

import facebook from './../../img/footer/facebook.svg';
import instagram from './../../img/footer/instagram.svg';
import twitter from './../../img/footer/twitter.svg';
import linkedin from './../../img/footer/linkedin.svg';
import playmarket from './../../img/footer/playmarket.svg';
import appstore from './../../img/footer/appstore.svg';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-information">
                <div className="footer-information-block">
                    <h2 className="footer-information-block-name">Need Help</h2>
                    <p className="footer-information-block-link">Contact Us</p>
                    <p className="footer-information-block-link">Track Order</p>
                    <p className="footer-information-block-link">
                        Returns & Refunds
                    </p>
                    <p className="footer-information-block-link">FAQ's</p>
                    <p className="footer-information-block-link">Career</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div className="footer-information-socials">
                        <Button src={facebook} />
                        <Button src={instagram} />
                        <Button src={twitter} />
                        <Button src={linkedin} />
                    </div>
                </div>
                <div className="footer-information-block">
                    <h2 className="footer-information-block-name">Company</h2>
                    <p className="footer-information-block-link">About Us</p>
                    <p className="footer-information-block-link">
                        euphoria Blog
                    </p>
                    <p className="footer-information-block-link">
                        euphoriastan
                    </p>
                    <p className="footer-information-block-link">
                        Collaboration
                    </p>
                    <p className="footer-information-block-link">Media</p>
                </div>
                <div className="footer-information-block">
                    <h2 className="footer-information-block-name">More Info</h2>
                    <p className="footer-information-block-link">
                        Term and Conditions
                    </p>
                    <p className="footer-information-block-link">
                        Privacy Policy
                    </p>
                    <p className="footer-information-block-link">
                        Shipping Policy
                    </p>
                    <p className="footer-information-block-link">Sitemap</p>
                </div>
                <div className="footer-information-block">
                    <h2 className="footer-information-block-name">Location</h2>
                    <p className="footer-information-block-link">
                        support@euphoria.in
                    </p>
                    <p className="footer-information-block-link">
                        Eklingpura Chouraha, Ahmedabad Main Road
                    </p>
                    <p className="footer-information-block-link">
                        (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2>Download The App</h2>
                    <div className="footer-information-block-download">
                        <Download src={playmarket} />
                        <Download src={appstore} />
                    </div>
                </div>
            </div>
            <Line />
            <Popular />
            <Line />
            <div className="footer-information-copyright">
                Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
            </div>
        </div>
    );
}

export default Footer;
