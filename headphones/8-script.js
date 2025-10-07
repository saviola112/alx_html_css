document.addEventListener('DOMContentLoaded', function() {
    // 1. Select the button (the hamburger icon) using its ID.
    const menuToggle = document.getElementById('menu-toggle');

    // 2. Select the main body element to apply the class.
    const bodyElement = document.body;

    // 3. Add an event listener to run code when the button is clicked.
    menuToggle.addEventListener('click', function(e) {
        // Stop the default action of the link (which is jumping to the top of the page)
        e.preventDefault(); 
        
        // 4. Toggle the 'menu-open' class on the body.
        // This is the essential step that triggers the CSS in 8-styles.css.
        bodyElement.classList.toggle('menu-open');
    });
});