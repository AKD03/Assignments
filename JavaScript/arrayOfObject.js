var mobiles = [{
    name: "Galaxy M31",
    features: {
        OS: "Exonys",
        Sensors: "Gyroscope"
    },
    brand: "Samsung",
    accessories: ["Safety Manual", "Charger"],
},
{
    name: "iphone",
    features: {
        battery: "4000mAH",
        camera: "pixels"
    },
    brand: "Apple",
    accessories: ["wireless earphone", "bluetooh"],

},
{
    name: "Redmi 5",
    features: {
        battery: "5000mAh",
        OS: "Snapdragon"
    },
    brand: "Xiaomi",
    accessories: ["Earphone", "Charger"],

}
];


for (const attr in mobiles) {
    var b = mobiles[attr];
    if (b instanceof Array) {
        for (const i in b)
            console.log("Array:" + b[i])
    } else if (typeof (b) == 'object') {
        for (var key in b) {
            console.log(key + " : " + b[key])
        }
    } else if (typeof b == 'function') {
        b();
    } else {
        console.log(b)
    }
}