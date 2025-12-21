const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src="/Images/LOGO.png" alt="LIHE Sydney Logo" />
                <h3>LINCOLN STUDENTS COMMUNITY</h3>
            </div>
            <p className="footer-copyright">© 2025 Lincoln Institute of Higher Education. All Rights Reserved.</p>

            <div className="social">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;