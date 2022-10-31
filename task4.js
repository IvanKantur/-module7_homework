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

class Computer extends ElectricalAppliance {
    constructor (name, brand, power) {
        super(name, power);
        this.brand = brand;
        this.isPlugged = true;
    }
}

class Lamp extends ElectricalAppliance {
    constructor(name, brand, power) {
        super(name, power);
        this.brand = brand;
        this.isPlugged = true;
    }
}

const laptop = new Computer("laptop", "msi", 1900);
const kitchinLamp = new Lamp("kitchenLapm", "Philips", 100);
laptop.isOn()
kitchinLamp.isOff()
console.log(laptop, kitchinLamp)
