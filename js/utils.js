import cssColors from './cssColors.js';

class RandomColorPicker {
    constructor() {
        this.colors = cssColors.map(c => c); // Copy array
    }

    pick() {
        const idx = Math.floor(Math.random() * this.colors.length);
        const color = this.colors[idx];
        this.colors.splice(idx, 1);

        return color;
    }
}

function copyToClipboard(text) {
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
}

function getSizeFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const height = parseInt(params.get('h'));
    const width = parseInt(params.get('w'));

    if (isNaN(width) || isNaN(height)) window.location = '/'; // Return to size select
    if (width < 0 || height < 0) window.location = '/'; // Return to size select

    return [width, height];
}

export { RandomColorPicker, copyToClipboard, getSizeFromUrl };
