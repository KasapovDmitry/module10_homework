 // Задание 2
  // Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert
  let btn2 = document.querySelector('.btn2');
  let result2 = document.querySelector('.result2');

  btn2.addEventListener('click', changeIcon2);

  function changeIcon2() {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const availableScreenWidth = window.screen.availWidth;
    const availableScreenHeight = window.screen.availHeight;

    result2.innerHTML = `
    <p><strong>Размер экрана:</strong></p>
    <p>Ширина: ${screenWidth}</p>
    <p>Высота: ${screenHeight}</p>
    <p></p>
    <p><strong>Доступный размер экрана:</strong></p>
    <p>Ширина: ${availableScreenWidth}</p>
    <p>Высота: ${availableScreenHeight}</p>
    `;
  alert('Ширина: ' + screenWidth + ', Высота: ' + screenHeight);
  }