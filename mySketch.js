
// Colors to fill polygons
const fillColors = [
  '#D31B5B',
  '#6B1D60',
  '#25314C',
  '#244F54',
  '#079187',
  '#62B3B7',
  '#FFDA40',
  '#DDA831',
  '#DDA831', // Do not use
  '#E96E4C',
  '#E96E4C', // Do not use
  '#E8B4AF',
  '#B3B3B3',
  '#333333',
];

function setup() {
  const stmSize = min(windowWidth, windowHeight);
  createCanvas(stmSize, stmSize);
  background(100);
  noStroke();

  let stmId = 1;

  const urlSP = new URLSearchParams(window.location.search);
  // Handle Queries
  for (const [key, val] of urlSP) {
    if (key === 'id') {
      stmId = Number(val);
    }
  }

  drawStomachionSolution(stmId - 1);
}

// Draw stomachion solution
const drawStomachionSolution = (numSolution) => {
  const stmScale = width / 15;
  const margin = 1.5 * stmScale;
  translate(margin, margin);

  // Use xN scaled stomachion data.
  const polygons = getScaledStomachionSolutions(stmScale)[numSolution];

  // For other polygons
  polygons.forEach((p, index) => {
    // Select color
    fill(fillColors[index]);

    if (p.length === 3) {
      triangle(p[0].x, p[0].y, p[1].x, p[1].y, p[2].x, p[2].y);
    } else if (p.length === 4) {
      quad(p[0].x, p[0].y, p[1].x, p[1].y, p[2].x, p[2].y, p[3].x, p[3].y);
    } else if (p.length === 5) {
      penta(p[0].x, p[0].y, p[1].x, p[1].y, p[2].x, p[2].y, p[3].x, p[3].y, p[4].x, p[4].y);
    }
  });
};

const penta = (x1, y1, x2, y2, x3, y3, x4, y4, x5, y5) => {
  beginShape();
  vertex(x1, y1);
  vertex(x2, y2);
  vertex(x3, y3);
  vertex(x4, y4);
  vertex(x5, y5);
  endShape(CLOSE);
};
