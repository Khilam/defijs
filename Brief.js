//Ex 1
let a = 10;
let b = 20;

[a, b] = [b, a]; 

console.log(a,b)
//Ex 2

function myInfo(){
Nom = 'toto';
Age = 30;
Homme = true;
return Nom +" "+ Age + " "+ Homme;
}
console.log(myInfo())

//Ex 3

function power(a){
    return a*a;
}
console.log(power(3))
//Ex 4
function som(a,b){
    return a+b;
}


console.log(som(2,6))
//Ex 5
function myMintsToSec(myMints){
    return myMints*60;
}
console.log(myMintsToSec(2))
//Ex 6
function incrementation(a){
    return a=a+1;

}
console.log(incrementation(2))

//Ex 6
function myTriangle(b, h){
return b*h/2;
}
console.log(myTriangle(8,2))
//Ex 7
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString("hello"))

//Ex 8
function getMax(Tableau, valeurMax) {   
    var valeurMax = Tableau[0];
     for (i=0; i<Tableau.length; i++)
             {
                 if (Tableau[i] > valeurMax)
                     {
                         return vcaleurMax = Tableau[i];
                     }
             }
     } 
console.log(getMax(7,5,6))


// Ex 9
function firstPosition(Tab){

return Tab[0];
}
console.log(firstPosition([8,5,9,4]))

// Ex 10

//Ex 11

function theRest(a,b){

    return a%b; 
}
console.log(theRest(3,3))

//Ex 12
function comparaison(a,b){
    if (a+b<100)
    return true;
    else 
    {
        return false
    }
}
console.log(comparaison(90,11))
console.log(comparaison(80,10))
// Ex 13
function convertHours(mySecs){
return mySecs*60*60;
}
console.log(convertHours(6))
//