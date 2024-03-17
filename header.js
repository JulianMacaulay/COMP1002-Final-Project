document.addEventListener('DOMContentLoaded', function() {
    var header = document.createElement('header');
    header.innerHTML = `
        <nav>
            <ul class="header-navigation">
                <li class="logo_item"><img src="images/3DO_Company_logo.png" alt="3DO Logo" class="logo"></li>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#about">About Company</a></li>
                <li><a href="#contact">Contact US</a></li>
                <li><a href="#services">Services</a></li>
            </ul>
        </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);
});
