






export const UserLogin = (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  };

  return fetch("/users/login", requestOptions)
    .then(handleResponse)
    .then(user => {
      localStorage.setItem("vacationerToken", JSON.stringify(user)); // user.token for the jwt
      return user; /// all User object with profile etc..
    });
};



export const GoogleLogin = () => {
  window.open("http://localhost:8080/auth/google", "_self");
};

export const UserLogout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem("vacationerToken");
};

export const UserRegister = (username, password, firstname, lastname) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, firstname, lastname })
  };
  return fetch("/users/register", requestOptions)
    .then(handleResponse)
    .then(user => {
      localStorage.setItem("VacUserToken", JSON.stringify(user.token)); // user.token for the jwt
      return user; /// all User object with profile etc..
    });
};

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

const handleResponse = response => {
  return response.json().then(text => {
    const data = text;
    if (!response.ok) {
      if (response.status === 401) {
        UserLogout();
        //   location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
};

//export default  {UserLogin, GoogleLogin}
