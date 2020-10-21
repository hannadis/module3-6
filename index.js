//functions
//used to easier structure a code or to reuse code later 


//named function - is creating a function
//declaration - name for it  
    function testTest() {
    var greeting = "Hello Im hanna";
}


// block of code that does not run inside a website until the function is called inside the javascript

// how to call the function : 
testTest(); 
// its possible to use this anywhere in the code - so it does not have to 
// be in any specific place in the code, you can just call it - its going to work inside the browser anytime when called 
// the order does not matter when using named functions

function testTest() {
    var greeting = "Hello Im hanna";
    return greeting; 
}


// in function instead of directly outputting anything from inside of function 
//its also possible to return a value using the function 
//instead of console.log its possible to use return to return somekind of result 
//so when we call out the function in the "testTest()" we still get the result of in this case "hello im hanna"
// its stored but not outputted yet
// if I want to output the function - I want to console log the entire function by doing: 

console.log(testTest());

//by doing this the whole function is available in the console in the browser

// if i want to add like another name then hanna as a default name that appears in the console log I can use 

// argument object. 

//have to create a placeholder inside the testTest() for example (a) but it can be called what ever 
// also possible to add more than one so (a, b)
function testTest() {
    var greeting = "Hello Im hanna";
    return greeting; 
}

//when you add a placeholder you can clear the name in the variable and just have "hello Im"

function testTest(a) {
    var greeting = "Hello Im " + a;
    return greeting; 
}
// in the variable you have to write "hello Im" and then the + so that it will be added together 
// so in the console.log you would have to add the placeholder

// so because (a) is a placeholder you can add whatever name you want in to the placeholder 
//for example 

console.log(testTest("Hanna")) //so "hanna" will come instead of the placeholder which is (a)



//anonymous function 

// trigger by tying it to a variable 

// this function is anonymous - and we dont give it a name 
var testTest = function(a) {
    var greeting = "My name is Hanna " +a;
    return greeting; 
}
// when a function is tight to a variable - which in this case is a anonymous function
// we have to activate it by: 
// it is possible to make a variable refrencing to the (a) so : 
//variable a is equal to "hanna"
var a = "hanna"; // this is how an anoymous function is done
console.log(testTest(a)); // we have to create () behind the name 



// the difference between a anonymous function and a name function
//is called hoisting  
//name function is stored at the top level in the javascript code, so it means we can use it whenever I want 

// anonymous function that is equal to a variable - the variable is at a top level like the variable 
// but the value of the function is not there yet until later in the script 


//argument objects

function glass () {
    //                  [index]
    console.log(arguments[0]); // index 0 is the first argument passed into the function 
}

glass("hanna"); // with this - Im accessing the arguments property inside the functions
                //behaves like an array 


function glass () {
    //                  [index]
    console.log(arguments[1]); //arguments inside []
}

glass("hanna, 7"); // add 2 arguments in here 
// if the 0 would be changed to 1 you would need 2 arguments 
// so I would need to add 2 arguments


function glass () {
    //                  [index]
    console.log(arguments.length); //also possible to use the length option
}
// in the console log this would give you the number 2, because there are 2 arguments going on here :
glass("hanna, 7");
// useful when creating libraries and helpful functions 


//-------------------

// object assign
// this will allow to merge multiple objects together. merge as many objects ad I want

const course = { //this object will have a single property - we have "course"
    name: 'Web programing' // name of the course 
};

const grade = { //this will also include a single property 
    score: 92
}; 

// these are now 2 seperate objects 
// this will have 2 arguments. (course. grade)
const finalResult = Object.assign(course, grade, { Teacher: 'Ms. Williams'}); //this method combines both together
const copy = Object.assign({}, finalResult); // this is a clone of the object 
console.log(copy);

// its also possible to add in another argument 
//object can have 2 properties for example
// I could add score and name in the same object
// what ever comes in last will be the value in the end 

function printName (options) { // this object will have a first name and last name property
    const defaults = {
        firstName: 'Johanna',
        lastName: 'Bryndis'

    };

    options = defaults; 

    console.log(`${options.first.Name} ${options.lastName}`); 
}

printName({ // this object is being passed into the function before
    firstName: 'hanna',
    
});



