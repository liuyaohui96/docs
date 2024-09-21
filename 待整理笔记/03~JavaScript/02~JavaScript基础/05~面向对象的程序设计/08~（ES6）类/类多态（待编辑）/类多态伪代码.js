// 伪代码
class Vehicle {
  engines = 1;
  ignition() {
    output('Turning on my engine.');
  }
  drive() {
    ignition();
    output('Steering and moving forward!');
  }
}

class Car extends Vehicle {
  wheels = 4;
  drive() {
    inherited: drive();
    output('Rolling on all ', wheels, ' wheels!');
  }
}
class SpeedBoat extends Vehicle {
  engines = 2;
  ignition() {
    output('Turning on my ', engines, ' engines.');
  }
  pilot() {
    inherited: drive();
    output('Speeding through the water with ease!');
  }
}

/*
在 pilot() 中通过相对多态引用了（继承来的）Vehicle 中的 drive()。
drive() 方法直接通过名字（而不是相对引用）引用了 ignotion() 方法。
实际上它会使用SpeedBoat 的 ignition()。如果你直接实例化了 Vehicle 类然后调用它的 drive()，那语言
引擎就会使用 Vehicle 中的 ignition() 方法。
*/
