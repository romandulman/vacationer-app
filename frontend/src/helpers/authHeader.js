const authHeader = () => {
  let user = JSON.parse(localStorage.getItem("vacationerToken"));
  if (user && user.token) {
    return { Authorization: `JWT ${user.token}` };
  } else {
    return {};
  }
};

export default authHeader;
