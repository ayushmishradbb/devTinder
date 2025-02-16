const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked");
  const token = "xyzabc";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauth Req");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("User auth is getting checked");
  const token = "xyzabc";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauth Req");
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };
