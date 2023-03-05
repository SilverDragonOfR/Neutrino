//MAIN JS for controling the board

const initAppMain = () =>
{
    //making 2D array of grid
    let nl = document.querySelectorAll(".inner__board div")
    let grid_linear = [];
    for(let i = nl.length; i--; grid_linear.unshift(nl[i]));
    let grid = [];
    while(grid_linear.length) grid.push(grid_linear.splice(0,28));

    // grid is a 2D Array with top left element being (0,0), iterartion: (row,column)
    
    md = false;

    for(let i=0;i<28;i++)
    {
        for(let j=0;j<28;j++)
        {
            grid[i][j].style.backgroundColor = "rgb(0, 0, 0)";
        }
    }

    function colorize(row,col,md)
    {
        if(md==true)
        {
            most_white = "rgb(255, 255, 255)";
            medium_white = "rgb(200, 200, 200)";
            least_white = "rgb(100, 100, 100)";
            black = "rgb(0, 0, 0)";
            
            grid[row][col].style.backgroundColor = most_white;

            try{

                if(grid[row+1][col].style.backgroundColor==black || grid[row+1][col].style.backgroundColor==least_white)
                {
                    grid[row+1][col].style.backgroundColor = medium_white;
                }
                if(grid[row][col+1].style.backgroundColor==black || grid[row][col+1].style.backgroundColor==least_white)
                {
                    grid[row][col+1].style.backgroundColor = medium_white;
                }
                if(grid[row-1][col].style.backgroundColor==black || grid[row-1][col].style.backgroundColor==least_white)
                {
                    grid[row-1][col].style.backgroundColor = medium_white;
                }
                if(grid[row][col-1].style.backgroundColor==black || grid[row][col-1].style.backgroundColor==least_white)
                {
                    grid[row][col-1].style.backgroundColor = medium_white;
                }

                if(grid[row+1][col+1].style.backgroundColor==black)
                {
                    grid[row+1][col+1].style.backgroundColor = least_white;
                }
                if(grid[row-1][col+1].style.backgroundColor==black)
                {
                    grid[row-1][col+1].style.backgroundColor = least_white;
                }
                if(grid[row+1][col-1].style.backgroundColor==black)
                {
                    grid[row+1][col-1].style.backgroundColor = least_white;
                }
                if(grid[row-1][col-1].style.backgroundColor==black)
                {
                    grid[row-1][col-1].style.backgroundColor = least_white;
                }

            }
            catch(err){ }

        }
    }
  
    //event listeners

    for(let i=0;i<28;i++)
    {
        for(let j=0;j<28;j++)
        {
            grid[i][j].addEventListener("mousedown",() =>
            {
                md = true;
                colorize(i,j,md);

                for(let a=0;a<28;a++)
                {
                    for(let b=0;b<28;b++)
                    {
                        grid[a][b].addEventListener("mouseover", (e)=>
                        {
                            colorize(a,b);
                            e.stopPropagation();
                        })
                    }
                }
            })
        }
    }

    for(let i=0;i<28;i++)
    {
        for(let j=0;j<28;j++)
        {
            grid[i][j].addEventListener("mouseup",() =>
            {
                md = false;

                for(let a=0;a<28;a++)
                {
                    for(let b=0;b<28;b++)
                    {
                        grid[a][b].addEventListener("mouseover",(e) =>
                        {
                            colorize(a,b,md);
                            e.stopPropagation();
                        })
                    }
                }
            })
        }
    }


}

document.addEventListener("DOMContentLoaded", initAppMain);