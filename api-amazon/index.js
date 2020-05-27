const url = "https://striveschool.herokuapp.com/api/product/";

getData = async () => {
  let response = await fetch(url, {
      headers: new Headers({
          "Authorization": "Basic dXNlcjIyOnlrZVpkQ1lOTHMyZHFiTWM="
      })
  }); // this is getting the response from the API fetching
  return await response.json(); // this is returning the result of the promise in an usable format
};

const saveEvent = async (agendaEvent) => {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(agendaEvent),
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": "Basic dXNlcjIyOnlrZVpkQ1lOTHMyZHFiTWM="
    }),
  });
  return response;
};