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
    const { top, left, width } = btn.getBoundingClientRect();
    popover.style.width = `${width + 30}px`;
    popover.style.bottom = `${top + 120}px`;
    popover.style.left = `${left - 15}px`;
  }
}
