// example 2
function Employee() {
    this.dept = 'general';  // Note that this.name (a local variable) does not appear here
  }
  Employee.prototype.name = ''; // A single copy
  
  function WorkerBee() {
    this.projects = [];
  }
  WorkerBee.prototype = new Employee;
  
  var amy = new WorkerBee;
  
  Employee.prototype.name = 'Unknown';
  console.log(amy.name); // Unknown