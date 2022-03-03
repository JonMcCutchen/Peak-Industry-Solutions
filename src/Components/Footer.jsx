import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <footer className="footer">
            <div className="footerLeft">
                <h2>Contact</h2>
                <p>peakindustrysolutions@aol.com</p>
                <p>843-676-5084</p>
            </div>
            
            <div className="footerRight">
                <p>Copyright 2022 Peak Industry Solutions</p>
            </div>

            <Link className="faq-link" to='/faq'>FAQ</Link>
            
            
        </footer>

        
    )
}
export default Footer;