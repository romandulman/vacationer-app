
export const UserLogin = () =>{
  return  fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: this.userLogin.UserName,
            password: this.userLogin.Password
        })
    })
        .then(res => res.json())
        .then(user => {
            this.props.LoginConfirm(user.profile);
        });
};
 export const GoogleLogin = () => {
    window.open("http://localhost:8080/auth/google", "_self");
};

const CheckNameAvailability = (name)=>{
    console.log(name)
}

//export default  {UserLogin, GoogleLogin}
