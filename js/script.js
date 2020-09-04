window.onload = () => {
  let formBox = document.querySelectorAll('.form__box');

  formBox.forEach((box) => {
    let icon = document.createElement('img');
    icon.setAttribute('src', 'images/icon-error.svg');

    icon.classList.add('error-icon');

    box.appendChild(icon);
  });
};

function validate() {
  let parent = this.parentElement.nextElementSibling;
  let icon = this.nextElementSibling;
  console.log(this);

  if (this.value === '') {
    icon.classList.add('show');
    parent.classList.add('show');

    this.style.borderColor = 'hsl(0, 100%, 74%)';
  } else {
    this.style.borderColor = 'hsl(246, 25%, 77%)';

    icon.classList.remove('show');
    parent.classList.remove('show');
  }
}

let inputs = document.querySelectorAll('.form__input');

inputs.forEach((input) => input.addEventListener('blur', validate));
