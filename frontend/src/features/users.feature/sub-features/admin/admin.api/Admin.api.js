import authHeader from '../../../../../helpers/authHeader'

export const GetVacationToEdit = (vacId) =>{
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/vacations/${vacId}`,requestOptions)
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
