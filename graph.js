// Add squares

const squares = document.querySelector('.squares');
for (var i = 1; i < 365; i++) {
    const level = Math.round(Math.random() * 1);
    squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
}

console.log("hi");