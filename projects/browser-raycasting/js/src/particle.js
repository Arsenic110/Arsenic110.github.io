class Particle
{
    constructor(w, h)
    {
        this.pos = createVector(w / 2, h / 2);
        this.rays = [];
        for(let a = 0; a < 360; a += 1)
        {
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }

    update(x, y)
    {
        this.pos.set(x, y);
    }
    check(walls)
    {
        for(let ray of this.rays)
        {
            let closest = null;
            let record = Infinity;

            for(let wall of walls)
            {
                
                const pt = ray.check(wall);
                
                if(pt)
                {   
                    
                    const d = p5.Vector.dist(this.pos, pt)
                    if(d < record)
                    {
                        record = d;
                        closest = pt;
                    }
                }
            }
            if(closest)
            {
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            }
            else
            {
                line(this.pos.x, this.pos.y, this.pos.x + ray.dir.x * 10000, this.pos.y + ray.dir.y * 10000);
            }
        }
        
    }

    draw()
    {
        fill(255);
        //ellipse(this.pos.x, this.pos.y, 16);
        for(let i = 0; i < this.rays.length; i++)
        {
            this.rays[i].draw();
        }
    }
}