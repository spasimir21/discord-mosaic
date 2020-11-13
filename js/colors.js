import { RandomColorPicker } from './utils.js';

class Colors {
    constructor() {
        this.randomColorPicker = new RandomColorPicker();
        this.onupdate = () => {};
        this.currColorIdx = 0;
        this.colors = [];

        this.element = document.createElement('div');
        this.element.classList.add('colors');

        this.addColor('white', 'blank');
        this.addColor();
        this.render();
    }

    render() {
        this.element.innerHTML = '';

        for (const [idx, color] of this.colors.entries()) {
            const input = document.createElement('input');
            const wrapper = document.createElement('div');
            const div = document.createElement('div');

            div.classList.add('color');
            div.style.backgroundColor = color.color;
            div.onclick = () => this.selectColor(div, idx);

            if (idx == this.currColorIdx) div.classList.add('selected');
            if (idx == 0) div.classList.add('blank');

            input.oninput = () => {
                color.name = input.value;
                this.onupdate();
            };

            input.classList.add('color-name');
            input.value = color.name;

            wrapper.appendChild(div);
            wrapper.appendChild(input);
            this.element.appendChild(wrapper);
        }
    }

    selectColor(element, idx) {
        this.element.querySelector('.selected').classList.remove('selected');
        element.classList.add('selected');
        this.currColorIdx = idx;
    }

    addColor(
        color = this.randomColorPicker.pick(),
        name = this.colors.length.toString()
    ) {
        this.colors.push({
            color,
            name
        });

        this.render();
    }
}

export default Colors;
