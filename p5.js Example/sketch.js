function setup() {
    var canvas = createCanvas(1200, 600);
    background(255);
    canvas.parent('sketch');
    stroke(0);

    /* Face */
    fill(147,112,219); // purple
    ellipse(600,300,300,300);

    /* Eyes */
    fill(50,230,180); //blueish-green
    ellipse(550,240,50,50);
    ellipse(650,240,50,50);
    fill(0);
    ellipse(553,245,10,10);
    ellipse(653,245,10,10);

    /* Mouse */
    noFill();
    strokeWeight(2);
    arc(600, 350, 150, 90, 0, PI);

}

