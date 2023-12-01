function ElecDevices(){
    this.pluggedIn = function (pluggedIn){
        if (pluggedIn === true){
            console.log(this.name + " is turned on")
        } else {
            console.log(this.name + " is turned off")
        }
    }
};

function TV(name, brand, screenSize, power){
    this.name = name,
    this.brand = brand,
    this.screenSize = screenSize,
    this.power = power
};

TV.prototype = new ElecDevices()

function Freezer(name, brand, color, power){
    this.name = name,
    this.brand = brand,
    this.color = color,
    this.power = power
};

Freezer.prototype = new ElecDevices()

const televisor = new TV('televisor', 'LG', 60, 120)
const freezer = new Freezer('freezer', 'samsung', 'white', 50)

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