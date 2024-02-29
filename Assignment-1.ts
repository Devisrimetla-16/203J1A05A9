//Basic types//
let a: boolean=false;
let b: number=16;
let c: string="Devisri";
let d: number[]=[6,7,8];
let x: [string,number];
x=["riya",8];
enum days{
    Monday=1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
let y: days = days.Saturday;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(x);
console.log(y);

//Add-Function//
function add(a: number, b: number) {
    return a + b;
}
console.log(add(1,6));

//Captilaze-Function//
function captilaze(a:string){
    return a.toUpperCase();
}
console.log(captilaze("riya"));

//Interface//

interface Person{
    name: string,
    age: number,
    email: string
  };
  
  const user: Person = {
    name: "Devisri",
    age: 20,
    email: "sri17@gmail.com"
  };
console.log(user);

//class//
class Car {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
  
    displayInfo(): void {
        console.log(`Car Information:
            Make: ${this.make}
            Model: ${this.model}
            Year: ${this.year}`);
    }
  }
  const myCar = new Car("BMW", "AUDi", 2024);
  myCar.displayInfo();

//Generic function-Reverse array//
function reverseArr<T>(arr: T[]): T[] {
    return arr.reverse();
}
const numsArray: number[] = [2,5,7,8,9];
console.log(reverseArr(numsArray));
const stringsArray: string[] = ["car", "bike", "Scooty"];
console.log(reverseArr(stringsArray));