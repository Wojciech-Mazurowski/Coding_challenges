
function generate_trees(n)
{
    for(let i=0;i<n;i++)
    {
        let y = Math.floor(Math.random() * cWidth/size);
        let x = Math.floor(Math.random() * cHeight/size);
        grid[index(x,y)].state = "tree";
    }
}

function generate_water(n)
{
    let y = Math.floor(Math.random() * (cWidth/size-20)+10);
    let x = Math.floor(Math.random() * (cHeight/size-20)+10);
    for(let i=0;i<n;i++)
    {
        x++;
        for(let j=0;j<n;j++) {
            grid[index(x, y)].state = "water";
            y++;
        }
        y-=n;
    }

}