export class Popover {
  constructor() {
    this._popover = {};
  }

  show(title, text) {
    const popover = document.createElement('div');
    popover.classList.add('popover');
    popover.innerHTML = `
   <h5 class="title">${title}</h5>
   <p class="text">${text}</p>`;

    this._popover.id = 1;
    this._popover.element = popover;
    document.body.appendChild(popover);

    const btn = document.querySelector('.btn');

    popover.style.width = `${btn.offsetWidth}px`;
    popover.style.top = `${btn.offsetTop - 130}px`;
    popover.style.left = `${btn.offsetLeft + 5}px`;
  }
}
