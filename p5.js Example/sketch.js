function setup() {
    var canvas = createCanvas(1200, 600);
    background(255);
    canvas.parent('sketch');
    stroke(0);
    noFill();
    fill(147,112,219);
    ellipse(600,300,300,300);
    fill(50,230,180);
    ellipse(550,240,50,50);
    ellipse(650,240,50,50);
    fill(0);
    ellipse(553,245,10,10);
    ellipse(653,245,10,10);
    noFill();
    strokeWeight(2);
    arc(600, 350, 150, 90, 0, PI);

}

