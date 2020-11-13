const getName = colors => colorId => {
    if (colorId == 0) return '      ';
    return `:${colors[colorId].name}:`;
};

const toLines = (grid, width) => {
    const height = grid.length / width;
    const lines = [];

    for (let i = 0; i < height; i++) {
        let line = '';
        for (let j = 0; j < width; j++) {
            line += grid[i * width + j];
        }
        lines.push(line);
    }

    return lines;
};

const compileGrid = (grid, colors, width) => {
    return (
        '​' +
        toLines(grid.map(getName(colors)), width)
            .map(line => line.replace(/ +$/g, ''))
            .join('\n')
    );
};

export default compileGrid;
