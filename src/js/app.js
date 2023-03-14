import { Popover } from './Popover';

const header = 'Popover title';
const text = "And here's some amazing content. It's very engaging. Right?";
const tooltipFactory = new Popover();

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  if (!document.querySelector('.popover')) {
    tooltipFactory.show(header, text);
    // console.log(tooltipFactory._popover);
  } else {
    document.querySelector('.popover').remove();
  }
});
