function setup(){
    //create canvas
    createCanvas(600, 600);
    // change the frame rate to make slower
    frameRate(10);
    background(255);
    angleMode(DEGREES); // Change the mode to DEGREES
    //noLoop();
}

function draw(){ 

    // once the frame count is high - stop looping
    if (frameCount>170){
        noLoop();
    }

    //set to no stroke
    noStroke();
   
    // generate the triangle
    points=generateTriangle();

    // draw the treingle
    let tr=new TriangleObj(points);
    tr.drawTriangle();

}

function generateTriangle(){
    w=width;
    h=height;
    d=random(50, w/2); //the longer piece
    angle=random(360); //random angle
    //the location x and y
    x=floor(d*cos(angle))+floor(w/2);
    y=floor(d*sin(angle))+floor(h/2);
    //the other, shorter side
    dangle=random(20);
    d2=random(50, width/2-50);
    // the other side
    x2=floor(d2*cos(angle+dangle))+floor(w/2);
    y2=floor(d2*sin(angle+dangle))+floor(h/2);
    //return the locations
    return [x,y,x2,y2];
}

// class TriangleGroup{
//     constructor(trObj){
//         this.arrayTr=[trObj]
//     }
//     addTriangle(trObj2){
//         this.arrayTr.push(trObj2);
//     }
// }

class TriangleObj {
    constructor(points) {
      this.x2 = points[0];
      this.y2 = points[1];
      this.x3 = points[2];
      this.y3 = points[3];
      this.colorT=getColor(this.x2, this.y2, this.x3, this.y3);
    }

    drawTriangle(){
        fill(this.colorT);
        triangle(width/2, height/2, this.x2, this.y2, this.x3, this.y3);
    }
}

function getColor(x2,y2,x3,y3){
    c1=floor(width/2);
    c2=floor(height/2);
    d=max(dist(c1,c2,x2,y2), dist(c1,c2,x3,y3));
    if (d<140){
        // return color(240,240,241,200); //option 1
        return color(239,239,239,150); //option 2
    }
    if (d<200){
        //return color(255,83,73,150); //option 1
        return color(255,82,13,150); //option 2
    }
    //return color(41,44,68,150); //option 1
    return color(63,87,101,150); //option 2
}