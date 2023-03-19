import { Popover } from './Popover';

const header = 'Popover title';
const text = "And here's some amazing content. It's very engaging. Right?";
const tooltipFactory = new Popover();
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  if (!document.querySelector('.popover')) {
    btn.classList.add('active');
    tooltipFactory.show(header, text);
  } else {
    document.querySelector('.popover').remove();
    btn.classList.remove('active');
  }
});
