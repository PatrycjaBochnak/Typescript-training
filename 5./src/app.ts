class Department {
   name: string;
   private employees:string[] = [];

   constructor(n: string){
    this.name = n;
   }

   describe(this: Department) {
    console.log('Deparment: ' + this.name)
   }
   addEmployee(employee: string) {
    this.employees.push(employee);
   }
   printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees);
   }
}

const accounting = new Department('Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Anna');

// accounting.employees[2] = 'Tom'; // it works only with simple classes

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'Pat', describe: accounting.describe } 

// accountingCopy.describe();