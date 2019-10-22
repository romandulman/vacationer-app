import authHeader from '../../../helpers/authHeader'

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
export const Follow = vacation =>{
    const requestOptions = {
        method: "POST",
        headers: authHeader()
        //body: JSON.stringify({ id:vacation.id})
    };
    return fetch(`/users/follow/${vacation.id}`,requestOptions)
        .then(handleResponse)
};


/*Unfollow  */
export const unFollow = vacation =>{
    const requestOptions = {
        method: "PUT",
        headers: authHeader()
    };
    return fetch(`/users/follow/${vacation.id}`,requestOptions)
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
