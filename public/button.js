const initAppButton = () =>
{
    //colours
    most_white = "rgb(255, 255, 255)";
    medium_white = "rgb(200, 200, 200)";
    least_white = "rgb(100, 100, 100)";
    black = "rgb(0, 0, 0)";

    //making 2D array of grid
    let nl = document.querySelectorAll(".inner__board div")
    let grid_linear = [];
    for(let i = nl.length; i--; grid_linear.unshift(nl[i]));
    let grid = [];
    while(grid_linear.length) grid.push(grid_linear.splice(0,28));

    // grid is a 2D Array with top left element being (0,0), iterartion: (row,column)

    // Draw Again button
    const aga = document.querySelector(".button__aga");
    aga.addEventListener("click",(e) =>
    {
        for(let i=0;i<28;i++)
        {
            for(let j=0;j<28;j++)
            {
                grid[i][j].style.backgroundColor = "#000000";
            }
        }

    })

    // Updating the Copywrite
    const cyear = document.querySelector(".cyear");
    let myDate = new Date();
    cyear.textContent = myDate.getFullYear();


    //Recognise Button
    const rec = document.querySelector(".button__rec");
    rec.addEventListener("click",(e) =>
    {
        //Converting the grid to send
        grid_linear = [];
        for (row of grid) for (e of row) grid_linear.push(e);

        arr = []
        for(let i=0;i<784;i++)
        {
            if(grid_linear[i].style.backgroundColor==most_white)
            {
                arr.push(255);
            }
            else if(grid_linear[i].style.backgroundColor==medium_white)
            {
                arr.push(200);
            }
            else if(grid_linear[i].style.backgroundColor==least_white)
            {
                arr.push(100);
            }
            else
            {
                arr.push(0);
            }  
        }

        let startDate = new Date();

        let p = fetch("/click",
        {
            method: "POST",
            body: JSON.stringify({image : arr}),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });
        p
        .then((response) =>
        {
            return response.json();
        })
        .then((object) =>
        {
            number = document.querySelector(".guess__number");
            latency = document.querySelector(".time__number");
            number.textContent = object.num;

            let endDate = new Date();
            let t = (endDate- startDate)/1000;
            latency.textContent = t +"s";
        })
        .catch((err) =>
        {
            console.log(err);
        })

    })

}


document.addEventListener("DOMContentLoaded", initAppButton);