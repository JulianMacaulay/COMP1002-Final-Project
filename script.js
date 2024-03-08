document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    header.innerHTML = '<h1>Global Header</h1><nav><!-- Navigation links here --></nav>';
    footer.innerHTML = '<p>Global Footer &copy; 2023</p>';
});
