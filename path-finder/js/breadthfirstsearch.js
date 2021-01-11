async function breadthFirstSearch(gridMatrix, startNode, endNode){
    var currentNode = startNode;
    var currentPath = [null];
    var nodeQueue = [currentNode];
    var pathQueue = [currentPath];
    var foundEnd = false;
    var visited = Array.from(Array(gridMatrix.length), _ => Array(gridMatrix[0].length).fill(false));
    visited[parseInt(startNode.dataset.y)][parseInt(startNode.dataset.x)] = true;
    while(nodeQueue.length !== 0){
        currentNode = nodeQueue.shift();
        currentPath = pathQueue.shift();
        var row = parseInt(currentNode.dataset.y, 10);
        var col = parseInt(currentNode.dataset.x, 10);

        if(currentNode.classList.contains('plain')){
            await swapClasses(currentNode, 'plain', 'active', 5);
        }

        var neighbors = getNeightbors(row, col, gridMatrix);
        for(var neighbor of neighbors){
            if(neighbor === endNode){
                foundEnd = true;
                nodeQueue = [];
                break;
            }else if(!visited[parseInt(neighbor.dataset.y)][parseInt(neighbor.dataset.x)] && !neighbor.classList.contains('blocked')){
                visited[parseInt(neighbor.dataset.y)][parseInt(neighbor.dataset.x)] = true;
                nodeQueue.push(neighbor);
                pathQueue.push([...currentPath, ...[currentNode]]);
            }
           
        }
        if(currentNode.classList.contains('active')){
            await swapClasses(currentNode, 'active', 'visited', 25);
        }
    }
    if(foundEnd){
        while(currentNode !== null){
            if(currentNode.classList.contains('visited')){
                await swapClasses(currentNode, 'visited', 'path1', 50);
                await swapClasses(currentNode, 'path1', 'path2', 50);
                await swapClasses(currentNode, 'path2', 'path3', 50);
            }
            currentNode = currentPath.pop()
        }
    }else{
        if(currentNode.classList.contains('plain')){
            await swapClasses(currentNode, 'plain', 'active', 0);
            await swapClasses(currentNode, 'active', 'visited', 10);
        }
        
        alert('No Path Found');
        generateGrid();
    }
    
}