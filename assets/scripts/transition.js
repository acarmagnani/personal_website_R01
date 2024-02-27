document.addEventListener('DOMContentLoaded', function () {
    // Initialize by showing the first page
    showPage('Explore');
});

function showPage(pageId) {
    var pages = document.querySelectorAll('.page');

    pages.forEach(function (page) {
        if (page.classList.contains('active')) {
            setTimeout(function () {
                page.style.opacity = 0;
                setTimeout(function () {
                    page.style.display = 'none';
                }, 500);
            }, 50);
            page.classList.remove('active');
        }
    });

    var selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        setTimeout(function () {
            selectedPage.style.display = 'block';
            setTimeout(function () {
                selectedPage.classList.add('active');
                selectedPage.style.opacity = 1;
                selectedPage.style.visibility = 'visible';
            }, 50);
        }, 500);
    }
}
