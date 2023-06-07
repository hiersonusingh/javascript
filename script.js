/*
Object Oriented Programming : 
class : template/Blueprint  - user defined data type
Object : instance of class - member of class
inheritance : Parent class -> Child Class
Encapsulation : Wrapping of data
Abstraction : Hiding of unnecessary properties from user
Polymorphism : more than one form

class  : keyword - create a class

constructor : initialize the objects of class
*/

// class Animal{
//     display()
//     {
//         console.log("This is Animal class")
//     }

// }

// const obj = new Animal();
// obj.display();

// class Programm{
//     addition(x,y)
//     {
//         let sum = x + y;
//         console.log(sum);
//     }

// }


// const obj = new Programm();
// obj.addition(25,25);

// class Programm{
//     addition(x,y)
//     {
//         let sum = x + y;
//         return sum;
//     }

// }


// const obj = new Programm();
// const res = obj.addition(25,25);
// console.log(res);

// class Programm{
//     constructor(x,y)
//     {
//         let sum = x + y;
//         console.log(sum);
//     }
// }

// const res = new Programm(28,72);


// class Programm{
//     constructor()
//     {
//         console.log("This is default constructor");
//     }
// }

// const res = new Programm();


// class Shape{
//     areaOfRectangle(l,b){
//         return l*b;

//     }
//     volumeOfCube(l,b,h){
//         return l*b*h;

//     }
// }


// const  obj = new Shape();
// const res = obj.areaOfRectangle(25,26);
// const res1 = obj.volumeOfCube(15,15,15);
// console.log(res);
// console.log(res1);

// class Animal{
//     sleep()
//     {
//         console.log("Animal sleeps");
//     }
// }
// class Dog extends Animal{
    // sleep()
    // {
    //     console.log("Dog sleeps");
    // }
//     run()
//     {
//         console.log("Dog is running");
//     }
// }

// const obj  = new Dog();
// obj.sleep();
// obj.run();

class Animal{
    message()
    {
        console.log("This is animal class");
    }
}
class Dog extends Animal{
    message()
    {
        console.log("This is Dog class");
    }
}

const obj = new Dog();
// const obj1 = new Animal();
obj.message();
// obj1.message();