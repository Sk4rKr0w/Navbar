document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const sidebar = document.querySelector('.sidebar');

    hamburgerIcon.addEventListener('click', function () {
        sidebar.style.left = (sidebar.style.left === '-15%' || sidebar.style.left === '') ? '0px' : '-15%';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger-icon');

    hamburgerIcon.addEventListener('click', function () {
        hamburgerIcon.classList.toggle('active');
    });
});


