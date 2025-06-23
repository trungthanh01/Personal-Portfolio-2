document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const passwordOneEl = document.getElementById('password-one');
    const passwordTwoEl = document.getElementById('password-two');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const notificationEl = document.getElementById('copy-notification');

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

    function generatePassword(length) {
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }

    generateBtn.addEventListener('click', () => {
        passwordOneEl.textContent = generatePassword(15);
        passwordTwoEl.textContent = generatePassword(24);
    });

    function copyToClipboard(element) {
        if (!element.textContent) return; // Không làm gì nếu không có mật khẩu

        navigator.clipboard.writeText(element.textContent).then(() => {
            // Hiển thị thông báo
            notificationEl.classList.add('show');
            // Ẩn thông báo sau 2 giây
            setTimeout(() => {
                notificationEl.classList.remove('show');
            }, 2000);
        }).catch(err => {
            console.error('Cannot copy: ', err);
            alert('Error! Unable to copy password.');
        });
    }

    passwordOneEl.addEventListener('click', () => copyToClipboard(passwordOneEl));
    passwordTwoEl.addEventListener('click', () => copyToClipboard(passwordTwoEl));

    // Logic chuyển đổi giao diện
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
        }
    });

    // Khởi tạo mật khẩu khi tải trang
    generateBtn.click();
});