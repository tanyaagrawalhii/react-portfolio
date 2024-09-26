import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Tanya</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://github.com/tanyaagrawalhii" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-github"></i>
                    </a>

                    <a href="http://bit.ly/3AY5iXT" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/tanya-agrawal-57a187250/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>

                <span className='footer__copy'>
                    &#169; Tanya All rigths reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer