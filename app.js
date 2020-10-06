const axios = require('axios')
const url = "https://ay61jgu2hf.execute-api.us-east-1.amazonaws.com/default/weather-api";

const getData = async url => {
    try {
      const response = await axios.get(url);
      const data = response.data;

      for (i = 0; i < data.length; i++) {
        var cityName = data[i]['city'];
        var cityVal = data[i].monthlyAvg;
        console.log(cityName);
        console.log(`Promedio anual de temperatura máxima: ${(totalBy(cityVal,'high')/cityVal.length).toFixed(1)}`);
        console.log(`Promedio anual de temperatura mínima.: ${(totalBy(cityVal,'low')/cityVal.length).toFixed(1)}`);
        console.log(`Total anual de días secos: ${totalBy(cityVal,'dryDays').toFixed(1)}`);
        console.log(`Total anual de días con lluvia: ${totalBy(cityVal,'rainfall').toFixed(1)}`);
        console.log(`Total anual de días con nieve: ${totalBy(cityVal,'snowDays').toFixed(1)}`);
      }

    } catch (error) {
      console.log(error);
    }
  };
  
  const totalBy = (arr, fn) => {
    var sum = 0;
    for( var i = 0; i < arr.length; i++ ){
    sum += arr[i][fn];
    }
    return sum;
  }

  getData(url);


