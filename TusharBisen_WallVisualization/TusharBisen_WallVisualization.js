const numWallInput = document.getElementById('numWalls');
const wallHeightInput = document.getElementById('wallHeights');
const generateButton = document.getElementById('generateBtn');
const wallContainer = document.getElementById('wallContainer');
const leftVisibleDisplay = document.getElementById('leftVisible');
const rightVisibleDisplay = document.getElementById('rightVisible');

const leftVisibleValue = 0;
const rightVisibleValue = 0;

generateButton.addEventListener('click', ()=>{

    const numWalls = parseInt(numWallInput.value);
    const heights = wallHeightInput.value.split('#').map(h => parseInt(h.trim()));

    // validating input for no. of wall
    if(!numWalls || numWalls < 1 || isNaN(numWalls)){
        alert("Please enter a valid positive integer for number of walls.");
        return;
    }

    if(heights.length !== numWalls || heights.some(isNaN)){
        alert(`Please enter exactly ${numWalls} numeric heights separated by '#'`);
        return;
    }
    
    // clear previous visualization
    wallContainer.innerHTML = '';

    const maxHeight = Math.max(...heights);

    heights.forEach(height => {
        const wall = document.createElement('div');
        wall.classList.add('wall');
        wall.style.height = `${height / maxHeight * 100}%`;
        wall.textContent = height;
        wallContainer.appendChild(wall);
    });
    
    //  visibility from left walls count function

    let leftCount = 0;
    let leftMax = 0;
    for(let i = 0; i < heights.length; i++){
        if(heights[i] > leftMax){
            leftCount++;
            leftMax = heights[i];
        }
    }
    
    // visibility from right walls count function

    let rightCount = 0;
    let rightMax = 0;

    for(let i = heights.length - 1; i >= 0; i--){
        if(heights[i] > rightMax){
            rightCount++;
            rightMax = heights[i];
        }
    }

    // now we dispaly the left count visibility and right count visibility
    leftVisibleDisplay.textContent = `Total walls visible from the left are: ${leftCount}`;
    rightVisibleDisplay.textContent = `Total walls visible from the right are: ${rightCount}`;

})