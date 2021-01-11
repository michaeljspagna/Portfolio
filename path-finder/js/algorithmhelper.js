function getNeightbors(row, col, grid){
    let neighbors = [];

    if(row - 1 >= 0){
        neighbors.push(grid[row - 1][col]);
    }
    if(col - 1 >= 0){
        neighbors.push(grid[row][col - 1]);
    }
    if(row + 1 < grid.length){
        neighbors.push(grid[row + 1][col]);
    }
    if(col + 1 < grid[0].length){
        neighbors.push(grid[row][col + 1]);
    }
    
    return neighbors;
}



var swapClasses = (cell, toRemove, toAdd, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cell.classList.remove(toRemove);
            cell.classList.add(toAdd);
            if(cell.classList.contains(toAdd) && !cell.classList.contains(toRemove)){
                resolve("Swap Successful");
            }else{
                reject("Swap Failed");
            }
        }, time);
    });
}