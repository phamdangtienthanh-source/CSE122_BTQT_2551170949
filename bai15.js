let currentExpression = '';
let openParenthesis = true; 

const expressionDisplay = document.getElementById('expression');
const resultDisplay = document.getElementById('result');

// Thêm ký tự vào biểu thức
function appendInput(val) {
    if (val === '()') {
        if (openParenthesis) {
            currentExpression += '(';
            openParenthesis = false;
        } else {
            currentExpression += ')';
            openParenthesis = true;
        }
    } else {
        currentExpression += val;
    }
    
    updateDisplay();
}

// Cập nhật giao diện màn hình
function updateDisplay() {
    expressionDisplay.textContent = currentExpression;
}

// Xóa toàn bộ (Nút C)
function clearAll() {
    currentExpression = '';
    openParenthesis = true;
    expressionDisplay.textContent = '';
    resultDisplay.textContent = '0';
}

// Tính kết quả (Nút =)
function calculate() {
    if (!currentExpression) return;

    try {
        // Thay thế các ký tự hiển thị thành toán tử JavaScript hợp lệ
        let formattedExpression = currentExpression
            .replace(/×/g, '*')
            .replace(/÷/g, '/');

        // Tính toán an toàn bằng Function
        let evalResult = new Function(`return ${formattedExpression}`)();

        // Xử lý làm tròn nếu là số thập phân dài
        if (typeof evalResult === 'number' && !Number.isInteger(evalResult)) {
            evalResult = parseFloat(evalResult.toFixed(8));
        }

        resultDisplay.textContent = evalResult;
    } catch (error) {
        resultDisplay.textContent = 'Lỗi';
    }
}