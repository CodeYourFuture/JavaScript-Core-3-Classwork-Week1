// Should output:
//      [
//          'The temperature in London is 10 degrees',
//          'The temperature in Paris is 12 degrees',
//          'The temperature in São Paulo is 23 degrees'
//      ]

function getTemperatureReport(cities) {
    let report = [];

    for(let i = 0; i < cities.length; i++) {
        let temperature = temperatureService(cities[i]);
        report.push(`The temperature in ${cities[i]} is ${temperature} degrees`);
    }
    return report;
}

function temperatureService(city) {
    let temparatureMap  = {
        'London': 10,
        'Paris': 12,
        'Barcelona': 17,
        'Dubai': 27,
        'Mumbai': 29,
        'São Paulo': 23,
        'Lagos': 33};
    

    return temparatureMap[city];
}

let report = getTemperatureReport(["London", "Paris", "São Paulo"]);

console.log(report);
