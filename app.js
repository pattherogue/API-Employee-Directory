// global variables
let employees = [];
const urAPI = `https://randomuser.me/api/?results=12&inc=name, 
picture, email, location, phone, dob &noinfo &nat=US`
const gridContainer = document.querySelector(".grid-container");
const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalCLose = document.querySelector(".modal-close");

//fetch data from API
fetch(urAPI)
    .then(res => res.json())
    .then(res => res.results)
    .then(displayEmployees)
    .catch(err => console.log(err))

    function displayEmployee(employeeData) {

        employees = employeeData;

        // stpre the employee HTML created 
        let employeeHTML = '';

        // loop through each employee and create HTML markup
        employees.forEach(employee, index) => {
            let name = employee.name;
            let email = employee.email;
            let city = employee.location.city;
            let pictre = employee.picture;

            employeeHTML += `
            
            
            `
            }
        }
    }
