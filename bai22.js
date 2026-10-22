// Lấy các phần tử HTML cần xử lý
const themeToggle = document.getElementById('theme-toggle');
const statusText = document.getElementById('status-text');

// Lắng nghe sự kiện thay đổi trên nút gạt
themeToggle.addEventListener('change', function () {
    if (this.checked) {
        // Thêm class .toi vào <body> khi bật công tắc
        document.body.classList.add('toi');
        statusText.textContent = 'Đây là giao diện ở chế độ TỐI (đang bật).';
    } else {
        // Xóa class .toi khỏi <body> khi tắt công tắc
        document.body.classList.remove('toi');
        statusText.textContent = 'Đây là giao diện ở chế độ SÁNG (đang bật).';
    }
});