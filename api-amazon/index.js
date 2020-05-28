const url = "https://striveschool.herokuapp.com/api/product/";

getData = async () => {
  let response = await fetch(url, {
      headers: new Headers({
          "Authorization": "Basic dXNlcjIyOnlrZVpkQ1lOTHMyZHFiTWM="
      })
  }); // this is getting the response from the API fetching
  return await response.json(); // this is returning the result of the promise in an usable format
};
const getDataOne = async (id) => {
  let response = await fetch(url + id);
  return await response.json();
}
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
const editEvent = async (id, agendaEvent) => {
  let response = await fetch(url + id, {
    method: "PUT",
    body: JSON.stringify(agendaEvent),
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": "Basic dXNlcjIyOnlrZVpkQ1lOTHMyZHFiTWM="
    }),
  });
  return response;
};

const deleteEvent = async (id) => {
  let response = await fetch(url + id, {
    method: "DELETE",
    headers: new Headers({
      
      "Authorization": "Basic dXNlcjIyOnlrZVpkQ1lOTHMyZHFiTWM="
    }),
  });
  return response;
};