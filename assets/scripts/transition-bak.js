function showPage(pageId) {
    // Get all elements with the class 'page'
    var pages = document.querySelectorAll('.page');

    // Hide all pages with a fade-out effect
    pages.forEach(function (page) {
        if (page.classList.contains('active')) {
            // If the page has the 'active' class
            setTimeout(function () {
                // Set a timeout to start the fade-out effect with a delay of 50 milliseconds
                page.style.opacity = 0;
                setTimeout(function () {
                    // Set another timeout to change display property after the transition duration (500 milliseconds)
                    page.style.display = 'none';
                }, 500); // Set the display property after the transition duration
            }, 50);
        } else {
            // For pages without the 'active' class, set visibility to hidden
            page.style.visibility = 'hidden';
        }
        // Remove the 'active' class from all pages
        page.classList.remove('active');
    });

    // Show the selected page with a delay and fade-in effect
    var selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        // If the selected page exists
        setTimeout(function () {
            // Set a timeout to start the fade-in effect with a delay of 500 milliseconds
            selectedPage.style.display = 'block';
            setTimeout(function () {
                // Set another timeout to add the 'active' class and set opacity and visibility
                selectedPage.classList.add('active');
                selectedPage.style.opacity = 1;
                selectedPage.style.visibility = 'visible'; // Set visibility to visible after the fade-in effect
            }, 50);
        }, 500); // Delay before starting the fade-in effect
    }
}
