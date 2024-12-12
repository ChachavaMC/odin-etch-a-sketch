const gridContainer = document.querySelector( "#gridContainer" );
const gridButton = document.querySelector("#gridButton");

gridButton.addEventListener("click", () => {
    let gridSizeInput = parseInt(prompt("How many squares per side (Max of 100)"));
    if(gridSizeInput > 100) {
        gridSizeInput = 100;
    }
    gridContainer.replaceChildren();
    createGrid(gridSizeInput);
    gridButton.textContent = "NEW GRID"
})

function createGrid( gridSize ){
    //  Create 16 "ROW" divs
    //  Inside each "ROW" div create 16 "COLUMN" divs
    for( let i = 1; i < gridSize + 1; i++ ){
        let newRow = document.createElement( 'div' );
        newRow.setAttribute( "id", "row" + i )
        newRow.className = "grid-row"
        for( let j = 1; j < gridSize + 1; j++ ){
            let newCell = document.createElement( 'div' );
            newCell.setAttribute("id", "cell" + i + "_" + j)
            newCell.className = "grid-cell"
            newRow.appendChild(newCell);

            //  This section just adds the simple colour change to
            //  the cell, rather than randomising it
            
            // newCell.addEventListener("mouseover", function(e) {
            //     newCell.classList.add("grid-hover");
            // })
            newCell.addEventListener("mouseover", changeCellColour)
        }
        gridContainer.appendChild(newRow);
    }
}

function changeCellColour(e) {
    const targetCell = e.target;
    let opacity = parseFloat(targetCell.style.opacity);
    if(opacity){
        targetCell.style.opacity = opacity + 0.1;
    } else {
        targetCell.style.opacity = 0.1;
    }

    let randomColour = Math.floor(Math.random()*16777215).toString(16);
    targetCell.style.backgroundColor = "#"+randomColour;
}