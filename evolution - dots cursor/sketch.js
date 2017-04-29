function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  network = new network();
  for (var i = 0; i < network.populationSize; i++) {
    network.population.push(new object(random(width),random(height)));
  }
  network.show();
}

function draw() {
  background(255);
  network.generate();
  network.show();
}

function network() {
  this.populationSize = 250;
  this.population = [];
  this.genePool = [];
}

network.prototype.generate = function() {
  this.genePool = [];
  for (var i = 0; i < this.populationSize; i++) {
    this.population[i].mutate();
    this.population[i].calculateFitness();
    this.population[i].genePoolAdd();
  }
  this.population = [];
  for (var i = 0; i < this.populationSize; i++) {
    this.population.push(random(this.genePool));
  }
}

network.prototype.show = function() {
  this.population.map(function(curr) {
    curr.show();
  })
}

function object(x,y) {
  this.dna = [x,y];
  this.mutation = 10;
  this.fitness = round(this.calculateFitness()/100);
}

object.prototype.mutate = function() {
  for (var i = 0; i < this.dna.length; i++) {
    this.dna[i] += random(-this.mutation,this.mutation);
  }
  if (this.dna[0] < 0) {
    this.dna[0] = width;
  } else if (this.dna[0] > width) {
    this.dna[0] = 0;
  }
  if (this.dna[1] < 0) {
    this.dna[1] = height;
  } else if (this.dna[1] > height) {
    this.dna[1] = 0;
  }

}

object.prototype.calculateFitness = function() {
  var max = dist(0,0,width/2,height/2);
  return dist(this.dna[0],this.dna[1],mouseX,mouseY) - max;
}

object.prototype.genePoolAdd = function() {
  for(var i = 0; i < this.fitness; i++) {
    network.genePool.push(new object(this.dna[0],this.dna[1]));
  }
}

object.prototype.show = function() {
  stroke(this.fitness*this.fitness,0,0);
  strokeWeight(5);
  point(this.dna[0],this.dna[1]);
}
