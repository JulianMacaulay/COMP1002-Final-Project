document.addEventListener('DOMContentLoaded', (event) => {
    var footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-section">
                <h4>Get In Touch With Us</h4>
                <p>Phone: +1 (900) 11 111 1111<br>
                Mon-Fri: 9.00 am - 8.00 pm<br>
                Saturday: 10.00 am - 6.00 pm<br>
                support@3do.com</p>
            </div>

            <div class="footer-section">
                <h4>Information</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Sitemap</a></li>
                    <li><a href="#">FAQs Page</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Shop Departments</h4>
                <ul>
                    <li><a href="#">Consoles & Accessories</a></li>
                    <li><a href="#">Smartphones & Tablets</a></li>
                    <li><a href="#">TV, Video Games</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-credit">Designed and Developed by 3DO company</p>

    `;

    document.body.appendChild(footer);
});
