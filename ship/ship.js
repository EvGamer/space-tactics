function Ship(field, x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.elem = document.createElement('img');

    this.elem.src = 'Ship.svg';
    this.elem.className = 'ship';
    this.elem.style.setProperty('top', x);
    this.elem.style.setProperty('left', y);
}