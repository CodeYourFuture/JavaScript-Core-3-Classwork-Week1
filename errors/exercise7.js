// Should output:
//      [
//          'The temperature in London is 10 degrees',
//          'The temperature in Paris is 12 degrees',
//          'The temperature in São Paulo is 23 degrees'
//      ]

function getTemperatureReport(cities) {
  let report = [];

  for (let i = 0; i < cities.length; i++) {
    //syntax and user error, .length is a property not a method
    let temperature = temperatureService(cities[i]);
    //user and reference error, no array called city, just cities
    report.push(`The temperature in ${cities[i]} is ${temperature} degrees`);
  }
  return report;
}

function temperatureService(city) {
  //missing a parameter user error
  let temparatureMap = {
    London: 10,
    Paris: 12,
    Barcelona: 17,
    Dubai: 27,
    //syntax error colon missing
    Mumbai: 29,
    "São Paulo": 23,
    //missing comma after Sao Paulo - syntax error
    Lagos: 33,
  };
  //missing closing bracket of object - syntax error

  return temparatureMap[city];
}

let report = getTemperatureReport(["London", "Paris", "São Paulo"]);

console.log(report);
