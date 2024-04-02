import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useState } from "react";

/* const req = async () => {
  try {
    const response = await fetch(
      "https://api.twelvedata.com/time_series?symbol=AAPL&interval=1min&apikey="
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Return the data fetched
  } catch (err) {
    console.error("Error fetching data:", err);
    // Optionally, rethrow the error if you want the caller to handle it
    throw err;
  }
};

const options = (historicalData) => ({
  title: {
    text: "Historical Data Chart",
  },
  xAxis: {
    categories: historicalData.map((data) => data.datetime),
  },
  yAxis: {
    title: {
      text: "Price",
    },
  },
  series: [
    {
      name: "High",
      data: historicalData.map((data) => [
        new Date(data.datetime).getMinutes(),
        parseFloat(data.high),
      ]),
    },
  ],
}); */
function App() {
  const [myData, ] = useState(null);
/*   useEffect(() => {
    req().then((d) => {
      console.log(d.values[0], "d");
      setdata(options(d.values));
    });
  }, []); */
  return (
    <>
      Hola!
      {!!myData && <HighchartsReact highcharts={Highcharts} options={myData} />}
    </>
  );
}

export default App;

/*  

Producto panel NASDAQ

 - Chart
 ¿cual usar?
 
 -API's
 listado y buscador -> https://api.twelvedata.com/stocks?exchange=NASDAQ
 
###Select Details :

  api: 
    url:https://api.twelvedata.com/time_series?symbol=AAPL&exchange=NASDAQ&interval=60min&apikey=
    adaptadores
  
  defaultOptions: 
  {
      variant: 'realtime',
      interval: 15,
      symbol: '',
      name: '',
      type: '',
      currency: '', 
      exchange: 'NASDAQ'
    }


<StockChartOptions /> Padre  
  

  realtime && <RealTimeChart />
    URL: https://api.twelvedata.com/time_series?symbol=AAPL&exchange=NASDAQ&interval=60min
    Intervalo
      1min / 5min/ 15min
    valor
      el del momento
    Componetes
      SelectMinInterval
    Funcionalidades
      Refech cada $intervalo



 historicTime &&  <HistoricTimeScreenChart />
    URL: https://api.twelvedata.com/time_series?symbol=AAPL&exchange=NASDAQ&start_date=2021-04-16%2009:48:00&end_date=2021-04-16%2019:48:00
    Intervalo 
      fecha y hora YYYY-MM-DD HH:MM:SS 
    valor 
    Componentes
      datepicker 
      timepicker
    Funcionalidades
      No Refech





 stock: {

          "symbol": "AAOI",
          "name": "Applied Optoelectronics Inc",
          "currency": "USD",
          "exchange": "NASDAQ",
          "mic_code": "XNMS",
          "country": "United States",
          "type": "Common Stock"

    },


interface Stock {
  Símbolo, Nombre, Moneda y Tipo. 
}
interface OptionsChart {
  variant, interval
}

// StocksList - buscador, listado y paginador -

//StockDetails - Chart y optionsChart









interface ScreenChart<V extends string, I> {
    variant: V;
    interval: I;
}


*/

