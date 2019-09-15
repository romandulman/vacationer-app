import {UserLogout} from "../user/User.services";

export const GetAllVecations = () =>{
    return fetch("/vacations/all")
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
