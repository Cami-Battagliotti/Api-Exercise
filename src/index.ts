import "./model/index";
import { fetchData } from "./model/index";

async function main(city: string, date: string) {
  const cityTemperatures = await fetchData(city, date);

  return cityTemperatures;
}

//main("Rome", "2024-07-03");

main("Rome", "2024-07-03").then((response) => response);
