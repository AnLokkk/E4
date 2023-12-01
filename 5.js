class ElecDevices {     constructor(name, power, brand) {
    this.name = name;
    this.power = power;
    this.brand = brand
    this.pluggedIn = function (pluggedIn){
        if (pluggedIn === true){
            console.log(this.name + " is turned on")
        } else {
            console.log(this.name + " is turned off")
        }
    }
}
};

class TV extends ElecDevices{   constructor(screenSize, name, power, brand) {
    super(name, power, brand);
    this.screenSize = screenSize;
}};

class Freezer extends ElecDevices{   constructor(color, name, power, brand) {
    super(name, power, brand);
    this.color = color;
}};

const televisor = new TV (60, 'televisor', 120, 'LG')
const freezer = new Freezer ('white', 'freezer', 50, 'samsung')

function calculateTotalPower(...devices) {
    let totalPower = 0;

    devices.forEach(device => {
        if (device.pluggedIn) {
            totalPower += device.power;
        }
    });

    return totalPower;
}

televisor.pluggedIn(true);
freezer.pluggedIn(true);

const totalPower = calculateTotalPower(televisor, freezer);
console.log(`Total power consumption: ${totalPower} watts`);