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
        b.forEach(i=>
            {
                console.log("Array:" + b[i])
            })
    } else if (typeof (b) == 'object') {
        for (let p in b) {
            console.log(p.toUpperCase()+ " : " , b[p])
        }
    } else if (typeof b == 'function') {
        b();
    } else {
        console.log(b)
    }
}

