const authHeader = () => {
  let user = JSON.parse(localStorage.getItem("vacationerToken"));
  if (user && user.token) {
    return { Authorization: `JWT ${user.token}` ,"Content-Type": "application/json"};
  } else {
    return {};
  }
};

export default authHeader;
