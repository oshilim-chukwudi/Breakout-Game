const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;

//create  Block
class Block {
  constructor(xAxis, YAxis) {
    this.bottomLeft = [xAxis];
    this.bottomRight = [xAxis + blockWidth, YAxis];
    this.topLeft = [xAxis, YAxis + blockHeight];
    this.topRight = [xAxis, blockWidth, YAxis + blockHeight];
  }
}
// all blocks
const blocks = [
  new Block(10, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 270),
  new Block(10, 270),
  new Block(10, 270),
  new Block(10, 270),
  new Block(10, 270),
  new Block(10, 270),
  new Block(10, 270),
  new Block(10, 270),
  new Block(10, 270),
  new Block(10, 270),
  new Block(10, 270),
  new Block(10, 270),
  new Block(10, 270),
];

//draw all my block
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = "50px";
    grid.appendChild(block);
  }
}
addBlocks();
