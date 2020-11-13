import compileGrid from './compileGrid.js';

class Grid {
    constructor(colors, width, height) {
        this.data = new Array(width * height).fill(0);
        this.onupdate = () => {};
        this.colors = colors;
        this.width = width;
        this.height = height;

        this.element = document.createElement('div');
        this.element.classList.add('grid');

        this.colors.onupdate = () => this.onupdate();

        this.render();
    }

    render() {
        this.element.style.gridTemplateColumns = `repeat(${this.width}, 50px)`;

        this.element.style.width = `${
            50 * this.width + 5 * (this.width - 1)
        }px`; // Manually set size since some browsers don't support fit-content on grid

        this.element.innerHTML = '';

        for (const [idx, colorIdx] of this.data.entries()) {
            const cell = document.createElement('div');

            cell.style.backgroundColor = this.colors.colors[colorIdx].color;
            cell.classList.add('cell');

            if (colorIdx == 0) cell.classList.add('blank');

            cell.onclick = () => {
                const color = this.colors.colors[this.colors.currColorIdx];

                this.data[idx] = this.colors.currColorIdx;
                cell.style.backgroundColor = color.color;

                if (this.colors.currColorIdx == 0) {
                    cell.classList.add('blank');
                } else {
                    cell.classList.remove('blank');
                }

                this.onupdate();
            };

            this.element.appendChild(cell);
        }
    }

    clear() {
        this.data.fill(0);
        this.onupdate();
        this.render();
    }

    fill() {
        this.data.fill(this.colors.currColorIdx);
        this.onupdate();
        this.render();
    }

    compile() {
        return compileGrid(this.data, this.colors.colors, this.width);
    }
}

export default Grid;
