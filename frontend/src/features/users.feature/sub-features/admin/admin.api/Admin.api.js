import authHeader from "../../../../../helpers/authHeader-Admin";

/*Get all  vacations */
export const GetVacationToEdit = vacId => {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };
  return fetch(`/vacations/${vacId}`, requestOptions).then(handleResponse);
};


/*Update vacation */
export const UpdateVacation = ( newVacData, vacId) => {
  const requestOptions = {
    method: "PUT",
    headers: authHeader(),
    body: newVacData
  };
  return fetch(`/vacations/${vacId}`, requestOptions).then(handleResponse);
};


/*Add new vacation */
export const PostNewVacation =  newVacData => {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: newVacData
  };
  return fetch(`/vacations`, requestOptions).then(handleResponse);
};


/*Delete vacation */
export  const DeleteVacation = vacId =>{
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  };
  return fetch(`/vacations/${vacId}`, requestOptions).then(handleResponse);
};

/*Get Vacations follow data for the reports chart */
export const GetFollowData = () => {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };
  return fetch(`/vacations/reports`, requestOptions).then(handleResponse);
};


/*Respone handler */
const handleResponse = response => {
  return response.json().then(text => {
    const data = text;
    if (response.status !== 201) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
};
