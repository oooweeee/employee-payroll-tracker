// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  const allEmployees = [];
  let decision = true;
  while (decision) {
    const firstName = prompt("Enter First Name");
    const lastName = prompt("Enter Last Name");
    let Salary = prompt("Enter Salary");
    if (isNaN(Salary) || Salary === null) {
      Salary = 0;
    }
  }
  let employee = {
    firstName: firstName,
    lastName: lastName,
    Salary: parseFloat(Salary)
  };
  decision = confirm("Employee saved.Add another employee?'");

  allEmployees.push(employee);

  return allEmployee;
}
  // TODO: Get user input to create and return an array of employee objects

  //get user data and add a loop specifically while loop(while this is true do this
  //get first name 
  //get last name//
  //get salary )

  ;
// Display the average salary
const displayAverageSalary = function (employeesArray) {
  const displayAverageSalary = function (employeesArray) {
    totalSalary = 0;
    for (i = 0; i < employeesArray.length; i++) {
      const currentEmployee = employeesArray[i];
      totalSalary += parseInt(currentEmployee.salary);
    }
    let averageSalary = totalSalary / employeesArray.length;
    alert((`There are ${employeesArray.length} employees. The average salary is $ ${averageSalary} `))
    console.log(`The average salary is $ ${averageSalary} `);
    console.log(`There are ${employeesArray.length} employees`)
    return averageSalary;
  }

}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  let randomEmployee = Math.floor(Math.random() * employeesArray.length);
  alert('Congrats to ${employeesArray[randomEmployee].firstName} ${employeesArray[randomEmployee].lastName} for being randomly selected')
  console.log(getRandomEmployee);
}
// TODO: Select and display a random employee


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", "trackEmployeeData")