"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //   private readonly id: string;
        //   private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    describe() {
        console.log(`Department (${this.id}) :${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment("d1", ['Pati']);
it.addEmployee("Max");
it.addEmployee("Anna");
// it.employees[2] = 'Tom'; // it works only with simple classes
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Something went wrong');
accounting.printReports();
// const itCopy = { name: 'Pat', describe: it.describe }
// itCopy.describe();
