// 숫자 입력시 입력한거 보여주는 로직
function updateValue(n) {
    console.log('updateValue', n);
    const element = document.querySelector('#value');

    element.textContent = n;
}