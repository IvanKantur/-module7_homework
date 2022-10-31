function ElectricalAppliance(name){
    this.type = 'electrical',
    this.name = name
}

ElectricalAppliance.prototype.isOn = function(){
    console.log(`${this.name} is ON`)
}

ElectricalAppliance.prototype.isOff = function(){
    console.log(`${this.name} is OFF`)
}

function HighPower(name, power){
    this.name = name,
    this.power = power,
    this.powerfull = "high"
};

function LowPower(name, power){
    this.name = name,
    this.power = power,
    this.powerfull = "low"
};

HighPower.prototype = new ElectricalAppliance()
LowPower.prototype = new ElectricalAppliance()

const iron = new HighPower('iron', '2000 W');
const lamp = new LowPower('lamp', '100 W');
const radio = new LowPower('radio', '340 W');

iron.isOn();
iron.isOff();
lamp.isOff();
console.log(radio);
