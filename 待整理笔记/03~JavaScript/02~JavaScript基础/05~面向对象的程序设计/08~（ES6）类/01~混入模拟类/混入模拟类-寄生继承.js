//“传统的 JavaScript 类”Vehicle
function Vehicle() {
  this.engines = 1;
}
Vehicle.prototype.ignition = function() {
  console.log('Turning on my engine.');
};
Vehicle.prototype.drive = function() {
  this.ignition();
  console.log('Steering and moving forward!');
};

//“寄生类”Car
function Car() {
  // 首先，car 是一个 Vehicle
  var car = new Vehicle();
  // 接着我们对 car 进行定制
  car.wheels = 4;
  // 保存到 Vehicle::drive() 的特殊引用
  var vehDrive = car.drive;
  // 重写 Vehicle::drive()
  car.drive = function() {
    vehDrive.call(this);
    console.log('Rolling on all ' + this.wheels + ' wheels!');
  };
  return car;
}
var myCar = new Car();
myCar.drive();
