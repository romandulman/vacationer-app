import authHeader from '../../../helpers/authHeader'

//// API Section ////


/*Get all vacations  */
export const GetAllVecations = () =>{
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch("/vacations",requestOptions)
           .then(handleResponse)
};


/*Follow  */
export const Follow = vacationId =>{
    const requestOptions = {
        method: "POST",
        headers: authHeader()
        //body: JSON.stringify({ id:vacation.id})
    };
    return fetch(`/vacations/follow/${vacationId}`,requestOptions)
        .then(handleResponse)
};


/*Unfollow  */
export const unFollow = vacationId =>{
    const requestOptions = {
        method: "DELETE",
        headers: authHeader()
    };
    return fetch(`/vacations/follow/${vacationId}`,requestOptions)
        .then(handleResponse)
};


/*Respone handler */
const handleResponse = response =>{
    return response.json().then(text => {
        const data = text;
        if (response.status !== 201) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
};
