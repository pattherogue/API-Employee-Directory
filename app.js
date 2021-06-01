// global variables
let employees = [];
const urAPI = `https://randomuser.me/api/?results=12&inc=name, 
picture, email, location, phone, dob &noinfo &nat=US`
const gridContainer = document.querySelector(".grid-container");
const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalCLose = document.querySelector(".modal-close");

//fetch data from API

