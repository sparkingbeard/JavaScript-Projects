const matrixInput = document.getElementById('matrixInput');
const blockedCountInput = document.getElementById('blockedCount');
const generateBtn = document.getElementById('generateBtn');
const seatContainer = document.getElementById('seatContainer');
const bookedCountDisplay = document.getElementById('bookedCount');

let bookedSeats = 0;

generateBtn.addEventListener('click', () => {
    const matrixValue = matrixInput.value.trim();
    const blockedCount = parseInt(blockedCountInput.value.trim());

    //validating the matrix input 
    const matrixPattern = /^(\d+)\*(\d+)$/;
    const match = matrixValue.match(matrixPattern)
    
    if (!matrixValue) {
    alert("Please enter relevant matrix size.");
    return;
    }

    if (!match) {
        alert("Invalid matrix format! Use Rows*Columns (e.g., 5*3)");
        return;
    }


    const rows = parseInt(match[1], 10);
    const columns =parseInt(match[2], 10);
    const totalSeats = rows * columns;

    if (rows <= 0 || columns <= 0) {
    alert("Rows and columns must be greater than 0.");
    return;
    }
    
    // validating the blocked seats input count
    if (isNaN(blockedCount) || blockedCount > totalSeats || blockedCount < 0) {
        alert("Invalid blocked seat input!, please enter a valid input");
        return;
    }

    //Reset container and booked seats count
    seatContainer.innerHTML = "";
    bookedSeats = 0;
    bookedCountDisplay.textContent= "Total Booked Seats: 0";

    //generating random blocked seats
    const blockedIndexes = new Set();
    while (blockedIndexes.size < blockedCount) {
        blockedIndexes.add(Math.floor(Math.random() * totalSeats));
    }
   

    // Grid setup and seats creation 
    seatContainer.style.gridTemplateColumns = `repeat(${columns}, 40px)`;
    
    for(let i = 0; i < totalSeats; i++){
        const seat = document.createElement('div');
        seat.classList.add('seat');
        if(blockedIndexes.has(i)){
            seat.classList.add('blocked');
        }else{
            seat.classList.add('available');
            seat.addEventListener('click', ()=> toggleSeat(seat));
        }
        seatContainer.appendChild(seat);
    }
});

function toggleSeat(seat){
    if(seat.classList.contains('available')){
        seat.classList.remove('available');
        seat.classList.add('booked');
        bookedSeats++;
    }else if(seat.classList.contains('booked')){
        seat.classList.remove('booked');
        seat.classList.add('available');
        bookedSeats--;
    }
    bookedCountDisplay.textContent= `Total Booked Seats: ${bookedSeats}`;
}
