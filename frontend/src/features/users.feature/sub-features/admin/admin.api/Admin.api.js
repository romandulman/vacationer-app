import authHeader from "../../../../../helpers/authHeader-Admin";

export const GetVacationToEdit = vacId => {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(`/vacations/${vacId}`, requestOptions).then(handleResponse);
};


/*Update vacation action*/
export const UpdateVacation = ( newVacData, vacId) => {
  const requestOptions = {
    method: "PUT",
    headers: authHeader(),
    body: newVacData
  };
  return fetch(`/vacations/${vacId}`, requestOptions).then(handleResponse);
};


/*Add new vacation action*/
export const PostNewVacation =  newVacData => {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: newVacData
  };
  return fetch(`/vacations`, requestOptions).then(handleResponse);
};


/*Delete vacation action*/
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
