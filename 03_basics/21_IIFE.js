// Immediately Invoked Function Expressions (IIFE)

//named IIFE
(function IIFE() {
    console.log(`Data Base Connected`);
})();

//un named IIfe
((USER) => {
    console.log(`Data Base Connected To ${USER}`);
})("Tiger");
