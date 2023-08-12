import { socialLinks } from "../data"
import PageLinks from "./PageLinks";
import SocialLinks from './SocialLinks';

const now = new Date();

const Footer = () => {
    return (
        <footer className="section footer">

            <PageLinks parentClass="footer-links" itemClass="footer-link" />

            <ul className="footer-icons">
                {socialLinks.map((link) => {
                    return (
                        <SocialLinks key={link.id} itemClass="footer-icon" {...link} />
                        // <li key={link.id}>
                        //     <a href={link.href} target="_blank" className="footer-icon" rel="noopener noreferrer">
                        //         <i className={link.icon}></i>
                        //     </a>
                        // </li>
                    )
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{now.getFullYear()}</span> all rights reserved
            </p>
        </footer>
    )
}
export default Footer