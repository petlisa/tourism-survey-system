// app.js - 这是一个简单的JavaScript代码示例

// 选择HTML中的元素
const submitButton = document.querySelector('#submit-button');
const nameInput = document.querySelector('#name');

// 事件监听器
submitButton.addEventListener('click', function() {
    if (nameInput.value) {
        alert('Hello, ' + nameInput.value);
    } else {
        alert('Please enter your name');
    }
});
