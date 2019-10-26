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


/*Get all Follows data  */
export const GetAllFollows = () =>{
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch("/vacations/follow",requestOptions)
        .then(handleResponse)
};


/* Follow  */
export const Follow = (vacationId,followerscount) =>{
    const requestOptions = {
        method: "POST",
        headers: authHeader(),
        body: JSON.stringify({ followerscount:followerscount})
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


/*Response handler */
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
