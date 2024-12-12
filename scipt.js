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

            newCell.addEventListener("mouseover", function(e) {
                newCell.classList.add("grid-hover");
            })
        }
        gridContainer.appendChild(newRow);
    }
}