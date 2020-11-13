function selectSize() {
    const width = parseInt(document.querySelector('#width').value);
    const height = parseInt(document.querySelector('#height').value);

    if (isNaN(width) || isNaN(height)) return;
    if (width < 0 || height < 0) return;

    window.location = `/editor.html?w=${width}&h=${height}`;
}
