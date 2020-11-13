import { copyToClipboard, getSizeFromUrl } from './utils.js';
import Colors from './colors.js';
import Grid from './grid.js';

const [width, height] = getSizeFromUrl();

const colors = new Colors();
const grid = new Grid(colors, width, height);

const charCount = document.querySelector('#char-count');
charCount.innerHTML = `${height} characters`;

grid.onupdate = () => {
    const chars = grid.compile().length;
    charCount.innerHTML = `${chars} characters`;

    if (chars > 2000) {
        charCount.classList.add('red');
    } else {
        charCount.classList.remove('red');
    }
};

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.colors').replaceWith(colors.element);
    document.querySelector('.grid').replaceWith(grid.element);

    document.querySelector('#add-color').onclick = e => {
        colors.addColor();
        if (colors.randomColorPicker.colors.length == 0) e.target.remove();
    };

    document.querySelector('#clear').onclick = () => grid.clear();
    document.querySelector('#fill').onclick = () => grid.fill();

    document.querySelector('#copy').onclick = () => {
        copyToClipboard(grid.compile());
    };
});
