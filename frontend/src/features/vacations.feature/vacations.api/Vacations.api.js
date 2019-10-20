import authHeader from '../../../helpers/authHeader'

export const GetAllVecations = () =>{

    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };


    return fetch("/vacations",requestOptions)
           .then(handleResponse)
};


export const Follow = vacation =>{
    const requestOptions = {
        method: "POST",
        headers: authHeader()
        //body: JSON.stringify({ id:vacation.id})
    };

    return fetch(`/users/follow/${vacation.id}`,requestOptions)
        .then(handleResponse)
};


export const unFollow = vacation =>{
    const requestOptions = {
        method: "PUT",
        headers: authHeader()
        //body: JSON.stringify({ id:vacation.id})
    };

    return fetch(`/users/follow/${vacation.id}`,requestOptions)
        .then(handleResponse)
};





const handleResponse = response =>{

    return response.json().then(text => {
        const data = text;
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
};
