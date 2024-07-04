import { parseURL } from "../constants";

async function fetchData(city: string, date: string) {
  // let date = "2024-07-03";

  const splittedDate = date.split("-");
  let day = parseInt(splittedDate[2]);
  let month = parseInt(splittedDate[1]);
  let year = parseInt(splittedDate[0]);

  for (let i = 0; i < 3; i++) {
    if (day >= 1) {
      day -= 1;
    }
    if (day < 1) {
      day = 30;
      month -= 1;
    }
    let fullDate = `${year}-${month}-${day}`;
    const API_URL = parseURL(city, fullDate);
    const res = await fetch(API_URL);
    const body = await res.json();
    const { maxtemp_c: maxTemperature, mintemp_c: minTemaperature } =
      body.forecast.forecastday[0].day;

    console.log(
      `${city}: ${fullDate}\nMaximum Temperature: ${maxTemperature}C\nMinimum Temperature: ${minTemaperature}C\n`
    );
  }
}

export { fetchData };
