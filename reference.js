let nameVar = "this is a nameVar";
const PI = 3.14;
// dont use var are global scope

let numOne = 5;
let numTwo = 5n;

console.log(typeof numOne);
console.log(typeof numTwo);

let person = {
    name: 'person name',
    age: 30
}

console.log(person);

// symbols
let id = Symbol('id');
let idTwo = Symbol.for("id");
console.log(typeof id);
console.log(id);

let symbolSample = {
    prop: "Prop value",
    [id] : 500,
    [idTwo]: 600
}

for(let key in symbolSample){
    console.log(key);
}

console.log(symbolSample[id]);
console.log(symbolSample[idTwo]);

const customIterator = {
    data: [1,2,3,4,5],
    [Symbol.iterator]: function() {
        let index = 0;
        const data = this.data;

        return {
            next: function() {
                const value = data[index];
                const done = index >= data.length;
                index++;
                return { value, done };
            }
        };
    }
}
console.log(customIterator);
for (const value of customIterator){
    console.log(value);
}
let numbers = [1,2,3,4,5];
let evalString = `1+2=${1+2}`;
console.log(evalString);
console.log(evalString.length);
console.log(numbers.length);

//const spanOne = document.getElementById('id');
//document.setAttribute('attribute', 'value');
//document.removeAttribute('attribute');
//spanOne.attribute_name = value;
//spanOne.classList.add('classname');
//spanOne.classList.remove('classname');
//spanOne.style.stylename = 'value';

//Events
//const button = document.querySelector('idname');
//querySelectorAll();
//button.addEventListener('click', ()=> {
//    });
//element.addEventListener('keyup', ()=> {
//    });
//element.classList.toggle('className');
//elements.forEach(var =>{});

//Creating and removing DOM elements
//const newElement = document.createElement('elType');
//const newText = document.createTextNode('text');
//newElement.append(newText);
//element.appendChild(newListItem);

//const element = document.querySelector('selectElement');
//element.removeChild(element);

//Ajax
//const xhr = new XMLHttpRequest();
//xhr.onreadystatechange = function () {
//    if (xhr.readyState === XMLHttpRequest.DONE){
//        if(xhr.status === 200){
//            const response = JSON.parse(xhr.responseText);
//            //actions with data
//        }
//    }
//}
//xhr.open('GET',url);
//xhr.send();
let error = true;
try{
    throw new Error('error message output');
}
catch(error){
    console.log(error.message);
}
finally {
    if(error){
        console.log('error thrown');
    }
    console.log('finally');
}

// npm install --global yarn
// yarn create vite
// cd project dir
// yarn
// yarn run dev