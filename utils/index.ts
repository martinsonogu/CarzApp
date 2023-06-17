export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "caee52e63amsh708b8ef74306ab8p18d282jsn2a3623df6312",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    { headers: headers }
  );

  const result = await response.json();
  return result;
}
