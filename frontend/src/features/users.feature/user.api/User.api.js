
/*User Login */
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
        body: JSON.stringify({newUser})
    };
    return fetch("/users/register", requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem("VacUserToken", JSON.stringify(user.token));
            return user;
        });
};


/*User Check name */
export const CheckUsernames = username => {
    return new Promise(resolve => {
        //test promise
        resolve("ron");
    });

    //alert(username)
    /*
      const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username })
      };
      return fetch("/auth/regcheck", requestOptions)
          .then(handleResponse)
          .then(user => {
              return user;

          });
  */
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

