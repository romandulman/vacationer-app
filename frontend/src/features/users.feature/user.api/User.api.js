
/*User Login */
import authHeader from "../../../helpers/authHeader-Admin";

export const UserLogin = (username, password) => {
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password})
    };
    return fetch("/users/login", requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem("vacationerToken", JSON.stringify(user));
            return user;
        });
};


/*User Logout */
export const UserLogout = () => {
    localStorage.removeItem("vacationerToken");
};


/*User Register */
export const UserRegister = newUser => {
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username: newUser.username,password:newUser.password,first_name:newUser.first_name,last_name:newUser.last_name,email:newUser.email})
    };
    return fetch("/users/register", requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem("VacUserToken", JSON.stringify(user.token));
            return user;
        });
};


/*Username availability Check  */
export const CheckUsernames = username => {
    const requestOptions = {
        method: "GET",
    };
    return fetch(`/users/register/checkname/${username}`, requestOptions)
        .then( user=>{
            console.log(user)
            if (user.status===302){
                return true

            }
            return false
        },
    );
};


/*Respone handler */
const handleResponse = response => {
    return response.json().then(text => {
        const data = text;
        if (!response.ok) {
            if (response.status === 401) {
                UserLogout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
};

