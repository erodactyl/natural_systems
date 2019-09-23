let pointPos;
let rockets;
const mutationCoefficient = 0.0001;
const numberOfRockets = 1000;
const numberOfThrusts = 200;

const selectBest = () => {
  const finalDistances = rockets.map(r => r.finalDistance());
  const min = Math.min(...finalDistances);
  const max = Math.max(...finalDistances);
  const fitnesses = finalDistances.map((d, idx) => {
    return { rocket: rockets[idx], fitness: int((1 - map(d, min, max, 0, 1)) * 100) };
  });

  const fitPopulation = [];
  fitnesses.forEach(f => {
    for (let i = 0; i < f.fitness; i++) {
      fitPopulation.push(f.rocket);
    }
  });

  const newPopulation = [];

  for (let i = 0; i < numberOfRockets; i++) {
    const rocket1 = fitPopulation[int(random(0, fitPopulation.length))];
    const rocket2 = fitPopulation[int(random(0, fitPopulation.length))];
    newPopulation.push(crossover(rocket1, rocket2));
  }

  console.log('Generation ' + int(frameCount / numberOfThrusts) + ' min is ' + min)

  rockets = newPopulation;
}

function setup() {
  createCanvas(500, 500);
  pointPos = createVector(width / 2, 15);
  rockets = new Array(numberOfRockets).fill(null).map(() => {
    return createRandomRocket();
  });
}

function draw() {
  background(220);
  circle(pointPos.x, pointPos.y, 15);
  if (frameCount % numberOfThrusts === 0) {
    selectBest();
  }
  rockets.forEach(r => r.update(frameCount % numberOfThrusts));
  rockets.forEach(r => r.display());
}