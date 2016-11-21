function setup() {
    var canvas = createCanvas(1200, 600);
    background(255);
    canvas.parent('sketch');
    stroke(0);

    /* Face */
    fill(84,255,159); // light green
    ellipse(600,300,350,300);

    /* Eyes */
    fill(227,168,105); //light brown
    ellipse(550,240,50,50);
    ellipse(650,240,50,50);
    fill(0);
    ellipse(553,245,10,10);
    ellipse(653,245,10,10);


    /* Mouse */
    strokeWeight(2);
    line(500,350,700,350);
    fill(255);

    /* Teeth */
    rect(590,350,10,20);
    rect(610,350,10,20);
    line(495,345,505,355);
    line(695,355,705,345);

}

