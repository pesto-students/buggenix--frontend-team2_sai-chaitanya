import { Link } from "react-router-dom";
import styles from "./Footer.module.css";


const Footer = () => {
    return (
        <div className= {styles.footerContainer}>
            <div className= {styles.footerContent}>
                <div>
                    <h1>Company</h1>
                    <h3>About</h3>
                    <h3>Lead Developers</h3>
                    <h3>Book a demo</h3>
                    <h3>Contact</h3>
                </div>
                <div>
                    <h1>Product</h1>
                    <h3>Features</h3>
                    <h3>Customers</h3>
                    <h3>Pricing</h3>
                    <h3>Use cases</h3>
                    <h3>Customer feedback</h3>
                    <h3>Quality assurance</h3>
                </div>
                <div>
                    <h1>Support</h1>
                    <h3>Helpcenter</h3>
                    <h3>FAQ</h3>
                    <h3>Develoer docs</h3>
                    <h3>Status</h3>
                    <h3>Security</h3>
                </div>
                <div>
                    <h1>Resources</h1>
                    <h3>Feedback templates</h3>
                    <h3>Blog</h3>
                    <h3>Newsletter</h3>
                    <h3>Free e-books</h3>
                    <h3>Videos</h3>
                </div>
            </div>
            <div className= {styles.otherLinks}>
                <span>@ 2022 Buggenix</span>
                <Link>Privacy Policy</Link>
                <Link>Terms of Services</Link>
                <Link>Contact Us</Link>
            </div>
        </div>
    )
}

export default Footer;