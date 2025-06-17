//----------DAY 1-------------

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

//---------DAY 2-------------

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

const arr1 = [
    {name: "Varun", city: "Hyderabad"},
    {name: "Asish", city: "Visakhapatnam"},
    {name: "Nithin", city: "Visakhapatnam"},
];
const myFunc = (a) => {
    if (a.name == "Asish") return true;
    return false;
};
const ans = arr1.find(myFunc);
console.log(ans);