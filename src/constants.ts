export function parseURL(city: string, date: string) {
  return `https://api.weatherapi.com/v1/history.json?key=f0dd881d49d448e5b9803901242906&q=${city}&dt=${date}`;
}
