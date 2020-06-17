class Stock {
  average(data, property) {
    return Number(data.reduce((a,b) => a + Number(b[property])/data.length,0.0).toFixed(2)).toLocaleString()
  }
  zmiana(data,range){
    return Number((Number(data[range-1].Zamkniecie)-Number(data[range-2].Zamkniecie)).toFixed(2)).toLocaleString();
  }
  zmianaProc(data,range){
    return Number((((Number(data[range-1].Zamkniecie)/Number(data[range-2].Zamkniecie))-1)*100).toFixed(4)).toLocaleString()
  }
  roc5(data,range){
    return Number((((Number(data[range-1].Zamkniecie)/Number(data[range-6].Zamkniecie))-1)*100).toFixed(2)).toLocaleString();
  }
  roc10(data,range){
    return Number((((Number(data[range-1].Zamkniecie)/Number(data[range-11].Zamkniecie))-1)*100).toFixed(2)).toLocaleString();
  }

  median(data) {
    var values = data.map(d => Number(d.Zamkniecie));
    if(values.length ===0) return 0;
    
    values.sort(function(a,b){
      return a-b;
    });
  
    var half = Math.floor(values.length / 2);
    var returnVal;
    if (values.length % 2)
      returnVal = values[half];
  
    returnVal = (values[half - 1] + values[half]) / 2.0;
    return returnVal.toLocaleString();
  }
  rsi(data){
        var prices = data.map((day) => day.Zamkniecie)

        var sumGain = 0.0;
        var sumLoss = 0.0;
        for (var i = 1; i < prices.length; i++)
        {
            var difference = prices[i] - prices[i - 1];
            if (difference >= 0)
            {
                sumGain += difference;
            }
            else
            {
                sumLoss -= difference;
            }
        }
        var returnVal;
        if (sumGain == 0) returnVal= 0;
        if (Math.abs(sumLoss) < 10e-20) returnVal= 100;

        var relativeStrength = sumGain / sumLoss;

        returnVal= 100.0 - (100.0 / (1 + relativeStrength));
        return Number(returnVal.toFixed(2)).toLocaleString();
    }
    mcad(macdData,range){
      return Number(macdData.MACD[range-1].toFixed(2)).toLocaleString()
    }
}

export default new Stock();