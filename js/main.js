// menu button functionality
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.banner__menu__buttons');
    const menu = document.querySelector('.banner__menu');
    const overlay = document.querySelector('#overlay');

    menuButton.addEventListener('click', function () {
        menu.classList.toggle('menu__active');
        overlay.classList.toggle('show');
    });

    // Đóng menu khi click vào link (tùy chọn)
    document.querySelectorAll('.banner__menu__lists a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('menu__active');
            overlay.classList.toggle('show');
        });
    });
    // Đóng menu khi click vào overlay
    overlay.addEventListener('click', () => {
        menu.classList.toggle('menu__active');
        menu.classList.remove('menu__active');
        overlay.classList.toggle('show');

    });
});


