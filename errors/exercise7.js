// Should output:
//      [
//          'The temperature in London is 10 degrees',
//          'The temperature in Paris is 12 degrees',
//          'The temperature in São Paulo is 23 degrees'
//      ]


  let cities = {
    London: 10,
    Paris: 12,
    Barcelona: 17,
    Dubai: 27,
    Mumbai: 29,
    "São Paulo": 23,
    Lagos: 33,
  };
  


function getTemperatureReport(cities) {
  let report = [];

  for (let i = 0; i < cities.length; i++) {
    let temperature = cities[i].values;
    report.push(`The temperature in ${cities[i]} is ${cities[i].values} degrees`);
  }
  return report;
}

let report = getTemperatureReport(["London", "Paris", "São Paulo"]);

console.log(report);
