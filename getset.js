//Get Set 

const persona = { //person object with 2 properties
    fyrstaNafn: 'Hanna',
    seinnaNafn: 'Dis',
    get fullName() {
    return `${persona.fyrstaNafn} ${persona.seinnaNafn}` //the arguments
},

// somewhere the full name should be shown - there might be many places where that would occur 
set fullName(value){
    const parts = value.split(' ');
    this.fyrstaNafn = parts[0];
    this.seinnaNafn = parts[1];


}
};
persona.fullName = 'John Smith';

//get > access properties
//set > change (mutate) them
console.log(persona); 