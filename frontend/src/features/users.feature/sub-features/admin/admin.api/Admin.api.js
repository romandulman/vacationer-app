import authHeader from "../../../../../helpers/authHeader-Admin";

export const GetVacationToEdit = vacId => {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(`/vacations/${vacId}`, requestOptions).then(handleResponse);
};

export const PostVacationToEdit = (vacId, newVacData) => {
  const requestOptions = {
    method: "PUT",
    headers: authHeader(),
    body: JSON.stringify({ newVacData })
  };

  return fetch(`/vacations/${vacId}`, requestOptions).then(handleResponse);
};


export const PostNewVacation =  newVacData => {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: newVacData
  };

  return fetch(`/vacations`, requestOptions).then(handleResponse);
};

export  const DeleteVacation = vacId =>{
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  };
  return fetch(`/vacations/${vacId}`, requestOptions).then(handleResponse);
};

const handleResponse = response => {
  return response.json().then(text => {
    const data = text;
    console.log(data)
    if (response.status !== 201) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
};
