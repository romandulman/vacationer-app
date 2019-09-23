import authHeader from '../../helpers/authHeader'
export const GetAllVecations = (a) =>{

    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };


    return fetch("/vacations",requestOptions)
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
