// const rect = {
//     perimeter: (x, y) => 2 * (x + y),
//     area: (x, y) => x * y
// }


const rect = require('./rectangle')
function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensins: ${l}, ${w}`);

    if(l <= 0 || w <= 0) {
        console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`)
    } else {
        console.log(`Area of the rectangele: ${rect.area(l, w)}`);
        console.log(`Perimeter of the rectangele: ${rect.perimeter(l, w)}`)
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(5, -3);