// Write your solution in this file!


const employee = { name: "Sam"};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const employee2 = {...employee, [key]:value};
    return employee2;
}

const newEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
     employee[key] = value;
     return employee;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');

function deleteFromEmployeeByKey(employee, key){
    const updateEmployee = {...employee};
    delete updateEmployee[key];
    return updateEmployee;
}

deleteFromEmployeeByKey(employee, 'streetAddress');

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');