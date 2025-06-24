// //   --------------------------------DAY 1-------------------------------

// let juice = 50;
// let gstOnjuice = 0.1;
// let fries = 70;
// let gstOnFries = 0.05;
// console.log("Total amount to be paid is: " + (juice + fries + (juice * gstOnjuice) + (fries * gstOnFries)));
// let age = 22;
// console.log("Start", age);

// function printBill(name, amount){
//     console.log("--------------");
//     console.log("Name: " + name);
//     console.log("Amount: " + amount);
//     console.log("--------------");
// }

// function calculatebillAmount(price,gst){
//     // let juice = 50;
//     // let gstOnjuice = 0.1;
//     console.log("calculatebillAmount....");
//     let BillAmount = price+price*gst;
//     // console.log(juiceBillAmount);
//     return BillAmount;
// }
// console.log("Mid");

// const res1 = calculatebillAmount(50,0.1);
// printBill("Juice", res1);
// const res2 = calculatebillAmount(60,0.2);
// printBill("Fries", res2);
// console.log("End");

// //   ---------------------------------DAY 2-------------------------------

// const printBill = (txt) => {
//     console.log("____________");
//     console.log("Rs.",txt);
//     console.log("____________");
// };
// const calculatebillAmountFood = (txt) => txt * 1.5;
// const calculatebillAmountClothes = (txt) => txt * 1.12;
// const calculatebillAmountDrinks = (txt) => txt * 1.2;
// const calculatebillforFoodandDrinks = (txt) => {
//     console.log(txt);
//     return txt;
// };
// const calculatebillforFood = (txt) => {
//     console.log(txt);
//     return txt;
// };
// const calculatebillforAll = (txt) => {
//     console.log(txt);
//     return txt;
// };
// const generateBill = (food, clothes, drinks,cb) => {
//     const foodBill = calculatebillAmountDrinks(food);
//     const drinksBill = calculatebillAmountDrinks(clothes);
//     const clothesBill = calculatebillAmountDrinks(drinks);
//     const totalBill = foodBill+drinksBill+clothesBill;
//     cb(totalBill);
// };
// generateBill(100, 400, 100, printBill);

// generateBill(100, 400, 0, calculatebillforFoodandDrinks);

// const cse07 = {
//     student: "Asish",
//     address: "Visakhapatnam",
//     bloodgrp: "A+",
// };
// console.log(cse07);
// const cse018 = {
//     student: "Nithin",
//     address: "Visakhapatnam",
//     bloodgrp: "O+",
// };
// console.log(cse018);
// const studentName = cse018.student;
// console.log(studentName);
// cse018.bloodgrp = "A+";
// cse018.college = "LPU";
// console.log(cse018);

// const person = {
//     name: "Asish",
//     height: "176",
//     weight: "78",
//     college: "LPU",
//     roll: "569",
//     getBMI: function () {
//         console.log(this.height, this.weight);
//     }
// }
// person.getBMI();
// person.weight = 90;
// person.getBMI();
// const allKeys = Object.keys(person);
// console.log(allKeys);
// const allValues = Object.values(person);
// console.log(allValues);
// const allEntries = Object.entries(person);
// console.log(allEntries);

// const arr =["apple", "banana", "cherry"];
// console.log(arr);
// const [a,b,c]=arr;
// console.log(b,c);
// arr.push("grape");
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// arr.unshift("orange");
// console.log(arr);

// const arr1 = [
//     {name: "Varun", city: "Hyderabad"},
//     {name: "Asish", city: "Visakhapatnam"},
//     {name: "Nithin", city: "Visakhapatnam"},
// ];
// const myFunc = (a) => {
//     if (a.name == "Asish") return true;
//     return false;
// };
// const ans = arr1.find(myFunc);
// console.log(ans);

// ------------------------------------- DAY 3 ----------------------------------

// console.log("Hello");
// const arr = ["cat", "dog", "elephant", "tiger"];
// for(let i=0; i < arr.length; i++){
//     const elem = arr[i];
//     console.log(i,elem);
// }

// for(let i in arr){
//     const elem = arr[i];            // prints all the keys one by one, i is the key
//     console.log(elem, i);
// }

// for(let i of arr){
//     console.log(i);                 // all the values one by one, i is the element
// }

// const { recipes } = data;
// const newArr = [];
// for (let i = 0; i < recipes.length; i++) {
//   const recipe = recipes[i];
//   const { name, cuisine } = recipe;
//   newArr.push({
//     name: name,
//     cuisine: cuisine,
//   });
// }
// console.log(newArr);

// console.log("window object", window); // Logs the global window object in browsers
// console.log("document object", window.document); // Logs the document object representing the HTML document

// const headings = document.getElementsByTagName("h1");
// console.log("Headings:", headings); // Logs all <h1> elements in the document

// const title = document.createElement("h1");
// const parent = document.getElementById("root");
// parent.append(title);

// -------------------------------------- DAY 4 -----------------------------------

// const english = 77;
// const maths = 82;
// const testname = "mid sem";
// const user = "Asish";
// const result =
//   user +
//   "secured a total of " +
//   (english + maths) +
//   " marks in " +
//   testname +
//   " examinations.";

// -------------------------------------- DAY 7 -----------------------------------

// const item1 = ReadableByteStreamController.createElem("li", {}, "Item 1");
// console.log(item1);5
// const item2 = ReadableByteStreamController.createElem("li", {}, "Item 2");
// const list = ReadableByteStreamController.createElem("ul", {}, [Item1, Item2]);
// const rootElem = document.getElementById("parent");
// const reactBoot = ReactDOM.createRoot(rootElem);

// const Card1 = (title) => {
//   return (
//     <div className="card">
//       <h1>{title}</h1>
//       <p>Description 1</p>
//     </div>
//   );
// };
// const container = (
//   <div>
//     {Card1("Telangana")}
//     {Card1("Ap")}
//     {Card1("Tamil Nadu")}
//   </div>
// );
// reactRoot.render(container);

const domRoot = document.getElementById("root");
const reactBoot = ReactDOM.createRoot(domRoot);

const arr = [
    {
        stud: "Varun",
        score: 50,
    },
    {
        stud: "Asish",
        score: 45,
    },
    {
        stud: "Nithin",
        score: 88,
    },
]
const Card = (props) => {
    const { score, title} = props;
    return(
        <div>
            <h1>{title}</h1>
            <h1>{score}</h1>
        </div>
    );
};
const App = () => {
    return(
        <div className="parent">
            {arr.map((elem) => {
                return <Card title = {elem.name} score = {elem.score}></Card>
            })}
        </div>
    )
}