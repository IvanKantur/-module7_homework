function ElectricalAppliance(name, power){
    this.name = name,
    this.power = power,
    this.isPlugged = false
}
// Метод, который определяет, что прибор включён в розетку
ElectricalAppliance.prototype.isOn = function(){
    console.log(`${this.name} is ON`);
    this.isPlugged = true;
}
// Метод, который определяет, что прибор выключен из розетки
ElectricalAppliance.prototype.isOff = function(){
    console.log(`${this.name} is OFF`);
    this.isPlugged = false;
}

function Computer(name, brand, power){
    this.name = name;
    this.brand = brand;
    this.isPlugged = true;
    this.power = power;
}

function Lamp(name, brand, power){
    this.name = name;
    this.brand = brand;
    this.isPlugged = false;
    this.power = power;
}

Computer.prototype = new ElectricalAppliance()
Lamp.prototype = new ElectricalAppliance()

const laptop = new Computer("laptop", "msi", 1900);
const kitchinLamp = new Lamp("kitchenLapm", "Philips", 100);
laptop.isOn()
kitchinLamp.isOff()
console.log(laptop, kitchinLamp)
