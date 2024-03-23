import { removeEleById } from './removeElement';

export const injectStyle = (id, css) => {
  // remove element before adding
  const targetId = 'khun-ma-' + id;
  removeEleById(targetId);

  // create a new style element
  const style = document.createElement('style');
  style.type = 'text/css';
  style.id = targetId;
  style.textContent = css;

  // add the style node to the webpage
  if (document.head) {
    document.head.appendChild(style);
    return;
  }
  document.documentElement.appendChild(style);
};
