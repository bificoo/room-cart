import styled from './style.module.scss';

function component() {
  const element = document.createElement('div');

  element.innerHTML = "Hello Webpack";
  element.classList.add(styled.hello);

  return element;
}

document.body.appendChild(component());