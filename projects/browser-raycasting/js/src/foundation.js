let wall = [];
let particle;
var cam;

function setup()
{
    createCanvas(window.innerWidth, window.innerHeight);
    let zz = 6;
    for(let i = 0; i < zz; i++)
    {
        wall[i] = new Boundary(random(width), random(height), random(width), random(height));
    }
    particle = new Particle(400, 400);

    //cam = new Camera();
}

function pan()
{
    switch(keyCode)
    {
        case RIGHT_ARROW:
        break;
        case LEFT_ARROW:

        break;
        case UP_ARROW:

        break;
        case DOWN_ARROW:

        break;
    

    }
    if(keyCode === RIGHT_ARROW)
    {
        //cam.translate(cam.x + 5, cam.y);
        //console.log("right arrow");
    }
    keyCode = null;
}

function draw()
{
    background(0);
    
    particle.update(mouseX, mouseY);
    for(let wal of wall)
    {
        wal.draw();
        
    }
    particle.check(wall);
    particle.draw();
    //pan();


}