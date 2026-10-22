document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Hàm hiển thị trạng thái lỗi
    function setError(input, message) {
        const formGroup = input.parentElement;
        const msgDiv = formGroup.querySelector('.message');
        
        formGroup.classList.remove('valid');
        formGroup.classList.add('invalid');
        msgDiv.textContent = `✗ ${message}`;
    }

    // Hàm hiển thị trạng thái hợp lệ
    function setSuccess(input) {
        const formGroup = input.parentElement;
        const msgDiv = formGroup.querySelector('.message');
        
        formGroup.classList.remove('invalid');
        formGroup.classList.add('valid');
        msgDiv.textContent = '✓ Hợp lệ';
    }

    // Biểu thức chính quy (Regex) kiểm tra email
    function isValidEmail(emailValue) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(emailValue);
    }

    // Hàm kiểm tra tổng thể từng trường
    function checkFullname() {
        const val = fullname.value.trim();
        if (val === '') {
            setError(fullname, 'Họ và tên không được để trống');
            return false;
        } else {
            setSuccess(fullname);
            return true;
        }
    }

    function checkEmail() {
        const val = email.value.trim();
        if (val === '') {
            setError(email, 'Email không được để trống');
            return false;
        } else if (!isValidEmail(val)) {
            // Kiểm tra gợi ý thiếu tên miền
            if (val.includes('@') && !val.split('@')[1]) {
                setError(email, 'Email không hợp lệ (thiếu tên miền)');
            } else {
                setError(email, 'Email không đúng định dạng');
            }
            return false;
        } else {
            setSuccess(email);
            return true;
        }
    }

    function checkPassword() {
        const val = password.value;
        if (val.length < 6) {
            setError(password, 'Mật khẩu phải có ít nhất 6 ký tự');
            return false;
        } else {
            setSuccess(password);
            return true;
        }
    }

    function checkConfirmPassword() {
        const passVal = password.value;
        const confirmVal = confirmPassword.value;

        if (confirmVal === '') {
            setError(confirmPassword, 'Xác nhận mật khẩu không được để trống');
            return false;
        } else if (confirmVal !== passVal) {
            setError(confirmPassword, 'Mật khẩu xác nhận không khớp');
            return false;
        } else {
            setSuccess(confirmPassword);
            return true;
        }
    }

    // Bắt sự kiện khi bấm nút Đăng ký (Submit)
    form.addEventListener('submit', (e) => {
        // Ngăn chặn gửi dữ liệu mặc định của form
        e.preventDefault();

        // Kiểm tra tất cả các ô
        const isFullnameValid = checkFullname();
        const isEmailValid = checkEmail();
        const isPasswordValid = checkPassword();
        const isConfirmPasswordValid = checkConfirmPassword();

        // Nếu tất cả hợp lệ mới tiến hành gửi
        if (isFullnameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            alert('Đăng ký tài khoản thành công!');
            // form.submit(); // Mở dòng này nếu muốn gửi form thực sự
        }
    });

    // Lắng nghe sự kiện gõ phím để kiểm tra trực tiếp (Real-time validation)
    fullname.addEventListener('input', checkFullname);
    email.addEventListener('input', checkEmail);
    password.addEventListener('input', () => {
        checkPassword();
        if (confirmPassword.value !== '') {
            checkConfirmPassword();
        }
    });
    confirmPassword.addEventListener('input', checkConfirmPassword);
});