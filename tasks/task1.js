// Задание 1
  // Сверстайте кнопку, которая будет содержать в себе icon_01. При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.
  let btn1 = document.querySelector('.btn1');
  // Были разные варианты. Выбрал этот так как чаще пользуемся им (обертка + через класс)
  btn1.addEventListener('click', changeIcon1);

  function changeIcon1() {
    let icon1 = btn1.querySelector('.icon11');
    let icon2 = btn1.querySelector('.icon12');
    changeClass(icon1, 'hidden');
    changeClass(icon2, 'hidden');
  }

  function changeClass(elem, name) {
    if (elem.classList.contains(name)) {
      elem.classList.remove(name);
    } else {
      elem.classList.add(name);
    }
  }