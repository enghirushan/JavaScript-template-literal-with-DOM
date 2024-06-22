let firstName = "Haritha";
let surName = "Ilangasinghe";
let age = 23;

//Normally
console.log("I am "+firstName +" "+surName+" and My age is "+age);

//Template Literals
console.log(`I am ${firstName} ${surName} and My age is ${age}`);


let domEl = `<h2 style="font-family:arial; color:blue;">I am ${firstName} ${surName} and My age is ${age}</h2>`;

document.getElementById("result").innerHTML = domEl;


function hello(){
   return "this is from hello() function";
}

document.getElementById("P1").textContent = `${hello()}`;