//var 
function exampleFunction() {
    var a= "I am a local variable";

    if (true) {
        var blockVar = "I am a block-scoped variable with var";
        a = "tghj";
        console.log(a); // Accessible within the function
        console.log(blockVar); // Accessible within the block
    }
     a = "tghj";
    console.log(a); // Accessible within the function
    console.log(blockVar); // Accessible outside the block (var is not block-scoped)
    console.log(a); 
}
exampleFunction();

