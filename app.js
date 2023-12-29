const rect = require('./rectangle')
function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensins: ${l}, ${w}`);

    rect(l, w, (err, rectangle) => {
        if(err) {
            console.log('ERROR:', err.message);
        } else {
            console.log(`Area of the rectangele with dimensins: ${l}, ${w} is: ${rectangle.area()}`);
            console.log(`Perimeter of the rectangele with dimensins: ${l}, ${w} is: ${rectangle.perimeter()}`);
        }
    });
    console.log('This statement is logged after the calll to rect()');
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(5, -3);