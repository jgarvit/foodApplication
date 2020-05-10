class Car {
  constructor(name, color, topSpeed, currentSpeed) {
    this.name = name;
    this.color = color;
    this.topSpeed = topSpeed || 200;
    this.currentSpeed = currentSpeed || 0;
  }
  // this => current objext calling the method
  displayFeatures(){
      console.log(`it is a ${this.name} with ${this.color} color and could clock upto ${this.topSpeed}`)
      return this;
  }
  accelerate(){
      this.currentSpeed++;
      return this
  }
  brake(){
      this.currentSpeed--;
      return this;
  }
  dispCurrSpeed(){
      console.log(`current speed is : ${this.currentSpeed}`)
      return this
  }
}
const beetle=new Car("beetle","red","150");
beetle.accelerate().accelerate().brake().dispCurrSpeed().accelerate().dispCurrSpeed();
