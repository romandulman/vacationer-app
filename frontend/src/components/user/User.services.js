
export const UserLogin = (username,password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  };

  return fetch("/auth/login", requestOptions)
    .then(handleResponse)
    .then(user => {
      localStorage.setItem("VacUserToken", JSON.stringify(user.token)); // user.token for the jwt
      return user; /// all User object with profile etc..
      //this.props.LoginConfirm(user.profile);
    });
};

 export const GoogleLogin = () => {
    window.open("http://localhost:8080/auth/google", "_self");
};

export const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
const handleResponse = response =>{
    return response.json().then(text => {
        const data = text;
        if (!response.ok) {
            if (response.status === 401) {

              //  logout();
               // location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
};



const CheckNameAvailability = (name)=>{
    console.log(name)
}

//export default  {UserLogin, GoogleLogin}
