// COMMON
document.addEventListener("DOMContentLoaded", function() {
    fetch('html/common/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Header').innerHTML = data;
        });
});


document.addEventListener("DOMContentLoaded", function() {
    fetch('html/common/lang.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Lang').innerHTML = data;
        });
});


// PAGES
document.addEventListener("DOMContentLoaded", function() {
    fetch('html/pages/whoami.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Whoami').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('html/pages/projects.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Projects').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('html/pages/experience.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Experience').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('html/pages/contact.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Contact').innerHTML = data;
        });
});